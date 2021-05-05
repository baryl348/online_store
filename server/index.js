const express= require('express')
require('dotenv').config()
const sequeLize = require('./db')

const PORT = process.env.PORT || 5000

const app = express()

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