const express = require('express');
const router = express.Router();
const controller = require('../controller/cafesController');

router.get('/', controller.getAllCafes);

module.exports = router;
