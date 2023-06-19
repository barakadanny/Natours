const express = require('express');
const { getHomeTours, getOverview, getTour } = require('../controllers/viewsController');

const router = express.Router();

router.get('/', getHomeTours)

router.get('/tours', getOverview)

router.get('/tour/:slug', getTour)

module.exports = router