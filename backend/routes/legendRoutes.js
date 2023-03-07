const express = require('express')
const router = express.Router()
const legendhoodController = require('../controllers/legendhoodController')

router.route('/:symbol')
    .get(legendhoodController.getChartPrices)

module.exports = router
