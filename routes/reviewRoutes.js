const express = require('express');
const { getAllReviews, createReview, deleteReview, updateReview, setTourUserIds, getReview } = require('./../controllers/reviewController');
const { protect, restrictTo } = require('./../controllers/authController');

// mergeParams: true allows us to access the tourId from the tour router
const router = express.Router({ mergeParams: true });

// Protect all routes after this middleware
router.use(protect);

router
    .route('/')
    .get(getAllReviews)
    .post(restrictTo('user'),setTourUserIds , createReview)

router
    .route('/:id')
    .delete(restrictTo('user', 'admin'), deleteReview)
    .patch(restrictTo('user', 'admin'), updateReview)
    .get(getReview)

module.exports = router;
