const express = require('express');
const { getAllTours, createTour, getTour, updateTour, deleteTour, aliasTopTours, getTourStats, getMonthlyPlan} = require('./../controllers/tourController');
const { protect, restrictTo } = require('./../controllers/authController');
const { createReview, getAllReviews } = require('./../controllers/reviewController');

const router = express.Router();

router
    .route('/top-5-cheap')
    .get(aliasTopTours, getAllTours);

router
    .route('/tour-stats')
    .get(getTourStats);

router
    .route('/monthly-plan/:year')
    .get(getMonthlyPlan);

router
    .route('/')
    .get(protect, getAllTours)
    .post(createTour)

router
    .route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour)

router
    .route('/:tourId/reviews')
    .get(getAllReviews)
    .post(protect, restrictTo('user'), createReview)

module.exports = router;