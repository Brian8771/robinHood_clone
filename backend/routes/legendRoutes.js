const express = require('express')
const router = express.Router()
const legendhoodController = require('../controllers/legendhoodController')

router.route('/news')
    .get(legendhoodController.getGeneralNews)

router.route('/news/:symbol')
    .get(legendhoodController.getSpecificNews)

router.route('/:symbol')
    .get(legendhoodController.getChartPrices)


module.exports = router
