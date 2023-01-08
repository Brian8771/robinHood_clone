const Stock = require('../models/Stock')
const User = require('../models/User')
const fetch = require('node-fetch');
const apiKey = process.env.FINNHUB_API

const buyNewStock = async (req, res) => {
    const { user, stockTicker, quantity } = req.body
    const response = await fetch('https://finnhub.io/api/v1/quote?symbol=AAPL&token=ceti18aad3i5jsal5gq0ceti18aad3i5jsal5gqg')
    const data = await response.json()

    if (!user, !stockTicker, !quantity) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const buyer = await User.findById(user._id).exec()

    buyer.buyingPower = buyer.buyingPower - data.c
    buyer.stocks = [...buyer.stocks, { "ticker": stockTicker, "quantity": quantity }]
    const updatedBuyer = await buyer.save()

    const buyingTicket = await Stock.create({ user, stockTicker, quantity })

    res.json({ message: `Buyer: ${buyer.username} bought AAPL for ${data.c} successfully testing: ${buyer.buyingPower} tickerNumber: ${buyingTicket._id}` })


}

module.exports = { buyNewStock }
