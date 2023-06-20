const Tour = require('../models/tourModel')
const catchAsync = require('../utils/catchAsync');

exports.getHomeTours = catchAsync(async(req, res, next)=>{
    res.status(200).render('home', {
        title: 'Home'
    })
})

exports.getOverview = catchAsync(async(req, res, next) => {
    // * GET /tour
    const tours  = await Tour.find();

    // * Render /tour
    res.status(200).render('overview', {
        title: 'All tours',
        tours
    })
})

exports.getTour = catchAsync(async(req, res, next) => {
    const tour = await Tour.findOne({slug: req.params.slug}).populate({
        path: 'reviews',
        fields: 'review rating user'
    });

    res.status(200)
        .set(
            'Content-Security-Policy',
            'connect-src https://*.tiles.mapbox.com https://api.mapbox.com https://events.mapbox.com'
        )
        .render('tour', {
            title: `${tour.name} Tour`,
            tour
        })
})

exports.getLoginForm = catchAsync(async(req, res, next) => {
    res.status(200).render('login', {
        title: 'Login'
    })
})
