const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
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
