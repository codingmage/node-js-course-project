const path = require('path')

const express = require('express')

/* const rootDir = require('../util/path') */

const adminController = require("../controllers/admin")

const router = express.Router()


router.get('/add-product', adminController.getAddProduct)

// app.get...
router.post('/add-product', adminController.postAddProduct)

router.get('/products', adminController.getProducts)

router.get('/edit-product/:productId', adminController.getEditProduct)

router.post('/edit-product', adminController.postEditProduct)

router.post('/delete-product', adminController.postDeleteProduct)

module.exports = router

/* exports.routes = router
exports.products = products */