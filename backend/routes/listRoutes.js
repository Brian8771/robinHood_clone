const express = require('express')
const router = express.Router()
const watchListsController = require('../controllers/watchListsController')

router.route('/')
    .get(watchListsController.getAllWatchListsFromUser)
    .post(watchListsController.createWatchList)
    .patch(watchListsController.updateWatchList)
    .delete(watchListsController.deleteWatchList)

module.exports = router
