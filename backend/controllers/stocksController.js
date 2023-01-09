const Transaction = require('../models/Transaction')
const User = require('../models/User')
const StockQuantity = require('../models/StockQuantity')
const fetch = require('node-fetch');
const apiKey = process.env.FINNHUB_API
// console.log(apiKey)


const buyNewStock = async (req, res) => {
    const { user, stockTicker, quantity } = req.body
    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${stockTicker}&token=${apiKey}`)
    const data = await response.json()
    const price = data.c * quantity

    if (!user, !stockTicker, !quantity) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const buyer = await User.findById(user._id).exec()

    if (buyer.buyingPower >= price) {
        buyer.buyingPower = buyer.buyingPower - price
    } else {
        return res.status(400).json({ message: 'Must have enough buying power' })
    }
    const updatedBuyer = await buyer.save()

    const buyingTicket = await Transaction.create({ user, stockTicker, quantity, price, buyOrSell: 'Buy' })
    const userStocks = await StockQuantity.findOne({ user, stockTicker }).exec()
    if (userStocks) {
        userStocks.quantity += quantity
        await userStocks.save()
    } else {
        const newStocks = await StockQuantity.create({ user, stockTicker, quantity })
        await newStocks.save()
    }

    res.json({ message: `Buyer: ${buyer.username} bought ${stockTicker} for ${data.c} successfully testing: ${buyer.buyingPower} ticketNumber: ${buyingTicket._id}` })


}

const sellStock = async (req, res) => {
    const { user, stockTicker, quantity } = req.body
    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${stockTicker}&token=${apiKey}`)
    const data = await response.json()
    const price = data.c * quantity

    if (!user, !stockTicker, !quantity) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const seller = await User.findById(user._id).exec()

    if (seller) {
        seller.buyingPower += price
    }
    await seller.save()

    const sellingTicket = await Transaction.create({ user, stockTicker, quantity, price, buyOrSell: "Sell" })
    const userStocks = await StockQuantity.findOne({ user, stockTicker }).exec()

    if (userStocks && userStocks.quantity > quantity) {
        userStocks.quantity -= quantity
        await userStocks.save()
    } else if (userStocks && userStocks.quantity == quantity) {
        await userStocks.deleteOne()
    } else {
        return res.status(400).json({ message: `Can only sell ${userStocks.quantity}` })
    }

    res.json({ message: `Seller successfully sold ${stockTicker} for ${price} transaction #${sellingTicket._id}` })


}

module.exports = { buyNewStock, sellStock }
