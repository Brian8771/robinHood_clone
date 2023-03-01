const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })
require('express-async-errors')
const express = require('express')
const app = express()
const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDb = require('./config/dbConn')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3500

connectDb()

app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())

app.use('/auth', require('./routes/authRoutes'))

app.use('/user', require('./routes/userRoutes'))

app.use('/stocks', require('./routes/stockRoutes'))

app.use('/watchlists', require('./routes/listRoutes'))

// Routes go here

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, mongoErrLog.log)
})
