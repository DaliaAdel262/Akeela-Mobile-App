const express = require('express');
const router = express.Router();
const controller = require('../controller/restaurantsController');

router.get('/', controller.getAllRestaurants);

module.exports = router;
