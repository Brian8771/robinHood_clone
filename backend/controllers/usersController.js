const User = require('../models/User')
const bcrypt = require('bcrypt')

// @desc get all users
// @route GET /users
// @access Private

// Robinhood usually doesnt have users interact with each other so gonna leave this commented out unless I find a use for it

const getAllUsers = async (req, res) => {
    // will need to add stocks to select later
    const users = await User.find().select('-password').lean()
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }
    res.json(users)
}

const getUserById = async (req, res) => {
    const { id } = req.body

    const user = await User.findById(id).lean()

    if (!user) {
        return res.status(400).json({ message: 'No user found' })
    }
    res.json(user)
}

// @desc create new user
// @route POST /users
// @access Private
const createNewUser = async (req, res) => {
    const { username, firstName, lastName, password, buyingPower } = req.body

    // Confirm data
    if (!username || !password || !firstName || !lastName) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate
    const duplicate = await User.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    // Hash password
    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    const userObject = (!buyingPower)
        ? { username, 'password': hashedPwd, firstName, lastName }
        : { username, 'password': hashedPwd, buyingPower, firstName, lastName }

    // Create and store new user
    const user = await User.create(userObject)
    if (user) { // created
        res.status(201).json({ message: `New user ${username} created` })
    } else {
        res.status(400).json({ message: 'Invalid user data recieved' })
    }
}

// @desc update a user
// @route PATCH /users
// @access Private
const updateUser = async (req, res) => {
    const { id, username, password, buyingPower } = req.body

    // Confirm data
    if (!id || !username || !password || typeof buyingPower !== Number || buyingPower === 0) {
        return res.status(400).json({ message: 'All fields except password required' })
    }

    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    // Check for duplicate
    const duplicate = await User.findOne({ username }).collation({ locale: 'en', strength: 2 }).lean().exec()
    // Allow updates to the original user
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: "Duplicate username" })
    }

    user.username = username
    user.buyingPower = buyingPower

    if (password) {
        // Hash password
        user.password = await bcrypt.hash(password, 10) // salt rounds
    }

    const updatedUser = await user.save()

    res.json({ message: `${updatedUser.username} updated` })
}

// @desc delete a user
// @route DELETE /users
// @access Private
const deleteUser = async (req, res) => {
    const { id } = req.body

    if (!id) {
        return res.status(400).json({ message: 'User ID Required' })
    }

    // const note = await Note.findOne({ user: id }).lean().exec()

    // if (note) {
    //     return res.status(400).json({ message: 'User has assigned notes' })
    // }

    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await user.deleteOne()

    const reply = `Username ${result.username} with ID ${result._id} deleted`

    res.json(reply)

}

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser }
