const User = require('../models/User')
const WatchList = require('../models/WatchList')


const getAllWatchListsFromUser = async (req, res) => {
    const { id } = req.body

    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'No user found' })
    }

    const lists = await WatchList.find({ user }).exec()

    if (!lists?.length) {
        res.status(400).json({ message: 'No Lists found for User' })
    }

    res.json(lists)

}

const createWatchList = async (req, res) => {
    const { id, name } = req.body

    if (!id || !name) {
        res.status(400).json({ message: 'All fields are required' })
    }

    const user = await User.findById(id).exec()

    if (!user) {
        res.status(400).json({ message: 'User not found' })
    }

    const duplicate = await WatchList.findOne({ name }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: "Duplicate name" })
    }

    const watchList = await WatchList.create({ user, name })

    if (watchList) {
        res.status(201).json({ message: `New Watchlist ${name} created` })
    } else {
        res.status(400).json({ message: 'Invalid Watchlist data recieved' })
    }
}

const updateWatchList = async (req, res) => {
    const { id, user, name, stocks } = req.body

    if (!id || !name || !user) {
        res.status(400).json({ message: 'All fields are required' })
    }

    const watchList = await WatchList.findById(id).exec()

    if (!watchList) {
        res.status(400).json({ message: 'Watchlist not found' })
    }

    const duplicate = await WatchList.findOne({ name }).collation({ locale: 'en', strength: 2 }).lean().exec()
    // Allow renaming of the original note
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: "Duplicate watchlist name" })
    }

    watchList.name = name
    if (stocks) {
        watchList.stocks = [...watchList.stocks, stocks]
    }

    const updateWatchList = await watchList.save()

    res.json(`'${updateWatchList.name}' updated`)

}

const deleteWatchList = async (req, res) => {
    const { id } = req.body

    if (!id) {
        res.status(400).json({ message: 'Watchlist id required' })
    }

    const watchList = await WatchList.findById(id)

    if (!watchList) {
        res.status(400).json({ message: 'Watchlist not found' })
    }

    const result = await watchList.deleteOne()

    const reply = `Watchlist '${result.name}' with ID ${result._id} deleted`

    res.json(reply)
}

module.exports = { getAllWatchListsFromUser, createWatchList, updateWatchList, deleteWatchList }
