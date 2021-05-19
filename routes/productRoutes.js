const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/', productController.createProduct);

module.exports = router;