const express = require('express')
const router = express.Router()
const stocksController = require('../controllers/stocksController')

router.route('/')
    .post(stocksController.buyNewStock)

module.exports = router
