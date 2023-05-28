const Tour = require('./../models/tourModel');

const getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        // results: tours.length,
        // data: {
        //     tours: tours
        // }
    })
}

const getTour = (req, res) => {
    // const tour = tours.find(el => el.id === parseInt(req.params.id));

    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         tours: tour
    //     }
    // })
}

const createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);

        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: "Invalid data sent!"
        })
    }


}

const updateTour = (req, res) => {

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>'
        }
    })
}

const deleteTour = (req, res) => {

    res.status(204).json({
        status: 'success',
        data: null
    })
}

module.exports = {
    getAllTours,
    getTour,
    createTour,
    updateTour,
    deleteTour
}