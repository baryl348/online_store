const express= require('express')
require('dotenv').config()
const sequeLize = require('./db')
const models = require('./models/models')
const router = require('./routes/index')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHadllingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',router)
// middleware в самом конце
app.use(errorHandler)
// app.get()

const start = async () => {
    try {
        await sequeLize.authenticate()
        await sequeLize.sync()
        app.listen(PORT,()=>{console.log(`server starting on port ${PORT}...`)})  
    } catch (error) {
        console.log(error)
    }
}

start()