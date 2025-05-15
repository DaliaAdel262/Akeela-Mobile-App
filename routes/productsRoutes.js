const express = require('express');
const router = express.Router();
const controller = require('../controller/productsController');

router.get('/', controller.getAllProducts);
router.get('/search', controller.searchByProduct);

module.exports = router;
