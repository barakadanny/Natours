const express = require('express');
const { getAllReviews, createReview } = require('./../controllers/reviewController');
const { protect, restrictTo } = require('./../controllers/authController');

// mergeParams: true allows us to access the tourId from the tour router
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(getAllReviews)
    .post(protect, restrictTo('user'), createReview)

module.exports = router;
