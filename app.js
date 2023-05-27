const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello from the middleware');
    next();
})

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

// Route Handlers
const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours: tours
        }
    })
}

const getTour = (req, res) => {
    const tour = tours.find(el => el.id === parseInt(req.params.id));
    console.log(tour);
    if(!tour) {
        return res.status(404).json({
            status: 'fail',
            message: 'Tour not found'
        })
    }

    res.status(200).json({
        status: 'success',
        data: {
            tours: tour
        }
    })
}

const createTour = (req, res) => {
    const newId = tours[tours.length - 1].id +1;
    const newTour = Object.assign({id: newId}, req.body);
    tours.push(newTour);

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    })
}

const updateTour = (req, res) => {
    if(req.params.id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Tour not found'
        })
    }

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    })
}

const deleteTour = (req, res) => {
    if(req.params.id > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Tour not found'
        })
    }

    res.status(204).json({
        status: 'success',
        data: null
    })
}

// Routes
app
    .route('/api/v1/tours')
    .get(getAllTours)
    .post(createTour)

app
    .route('/api/v1/tours/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)

app
    .route('/api/v1/users')
    .get(getAllUsers)
    .post(createUser)

app
    .route('/api/v1/users/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

// Start Server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
