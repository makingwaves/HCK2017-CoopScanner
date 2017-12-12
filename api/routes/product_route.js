var express = require('express');
var barcode = express.Router();
var productController = require('../controllers/productController');

barcode.get('/product/:id', productController.get_product_by_barcode);

module.exports = barcode;