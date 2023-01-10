const express = require('express')
const router = express.Router()
const stocksController = require('../controllers/stocksController')

router.route('/')
    .get(stocksController.getAllStocksFromUser)
    .post(stocksController.buyNewStock)
    .patch(stocksController.sellStock)

module.exports = router
