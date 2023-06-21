const express = require('express');
const { getHomeTours, getOverview, getTour, getLoginForm } = require('../controllers/viewsController');
const { isLoggedIn } = require('../controllers/authController')

const router = express.Router();

router.use(isLoggedIn)

router.get('/', getHomeTours)

router.get('/tours', getOverview)

router.get('/tour/:slug', getTour)

router.get('/login', getLoginForm)

module.exports = router