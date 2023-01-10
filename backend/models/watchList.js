const mongoose = require('mongoose')

const watchlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    stocks: {
        type: [String],
        default: []
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('WatchList', watchlistSchema)
