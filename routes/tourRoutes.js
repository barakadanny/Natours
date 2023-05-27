const express = require('express');
const { getAllTours, createTour, getTour, updateTour, deleteTour, checkId, checkBody } = require('./../controllers/tourController');

const router = express.Router();

// console.log(`Tour id is: ${val}`);
router.param('id', checkId)

router
    .route('/')
    .get(getAllTours)
    .post(checkBody, createTour)

router
    .route('/:id')
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour)

module.exports = router;