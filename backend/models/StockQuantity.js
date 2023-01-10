const mongoose = require('mongoose')

const stockQuantitySchema = new mongoose.Schema({
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
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('StockQuantity', stockQuantitySchema)
