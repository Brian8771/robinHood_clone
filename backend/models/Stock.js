const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    stockTicker: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    buy: {
        type: Boolean,
        default: true
    }

})

module.exports = mongoose.model('Stock', stockSchema)
