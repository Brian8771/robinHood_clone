const Transaction = require('../models/Transaction')
const User = require('../models/User')
const StockQuantity = require('../models/StockQuantity')
const fetch = require('node-fetch');
const { el } = require('date-fns/locale');
const apiKey = process.env.FINNHUB_API


const getAllStocksFromUser = async (req, res) => {
    const { user } = req.body


    if (!user) {
        return res.status(400).json({ message: 'No user found' })
    }

    let stocks = await StockQuantity.find({ user }).exec()

    if (!stocks?.length) {
        return res.status(400).json({ message: 'No stocks from user found' })
    }
    let arr = []
    for (let i = 0; i < stocks.length; i++) {
        let obj = {}
        let response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${stocks[i].stockTicker}&token=${apiKey}`)
        let data = await response.json()
        obj['userStockData'] = stocks[i]
        obj['currentPrice'] = data.c
        arr.push(obj)
    }

    res.json(arr)

}

const buyNewStock = async (req, res) => {
    const { user, stockTicker, quantity } = req.body

    if (!user, !stockTicker, !quantity) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${stockTicker}&token=${apiKey}`)
    const data = await response.json()
    const price = data.c * quantity

    const buyer = await User.findById(user._id).exec()

    if (buyer.buyingPower >= price) {
        buyer.buyingPower = buyer.buyingPower - price
    } else {
        return res.status(400).json({ message: 'Must have enough buying power' })
    }

    await buyer.save()

    const userStocks = await StockQuantity.findOne({ user, stockTicker }).exec()
    if (userStocks) {
        userStocks.quantity += quantity
        userStocks.totalPrice += price
        await userStocks.save()
    } else {
        const newStocks = await StockQuantity.create({ user, stockTicker, quantity, totalPrice: price })
        await newStocks.save()
    }

    const buyingTicket = await Transaction.create({ user, stockTicker, quantity, price, buyOrSell: 'Buy' })

    res.json({ message: `Buyer: ${buyer.username} bought ${stockTicker} for ${data.c} successfully testing: ${buyer.buyingPower} ticketNumber: ${buyingTicket._id}` })


}

const sellStock = async (req, res) => {
    const { user, stockTicker, quantity } = req.body

    if (!user, !stockTicker, !quantity) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${stockTicker}&token=${apiKey}`)
    const data = await response.json()
    const price = data.c * quantity

    const userStocks = await StockQuantity.findOne({ user, stockTicker }).exec()

    if (userStocks && userStocks.quantity > quantity) {
        userStocks.quantity -= quantity
        await userStocks.save()
    } else if (userStocks && userStocks.quantity == quantity) {
        await userStocks.deleteOne()
    } else {
        return res.status(400).json({ message: `Can only sell ${userStocks.quantity}` })
    }

    const seller = await User.findById(user._id).exec()

    if (seller) {
        seller.buyingPower += price
    }

    const sellingTicket = await Transaction.create({ user, stockTicker, quantity, price, buyOrSell: "Sell" })
    await seller.save()

    res.json({ message: `Seller successfully sold ${stockTicker} for ${price} transaction #${sellingTicket._id}` })

}

module.exports = { getAllStocksFromUser, buyNewStock, sellStock }
