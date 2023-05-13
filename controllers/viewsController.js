const Tour = require('../models/tourModel')
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async(req, res, next) => {
    // * GET /tour
    const tours  = await Tour.find();

    // * Render /tour
    res.status(200).render('overview', {
        title: 'All tours',
        tours
    })
})

exports.getTour = catchAsync((req, res, next) => {
    res.status(200).render('tour', {
        title: 'tour',
    })
})