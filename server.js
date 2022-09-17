import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectMongoDB from './config/db.js';
import { userController, foodController } from './controllers/allController.js';

// app and .env init
const app = express()
dotenv.config()

// Dotenv variable
const app_name = process.env.APP_NAME
const port = process.env.PORT || 5000

// app controller
userController()

// foodController()

app.listen(port, () => {
    // MongoDb connection
    connectMongoDB()

    console.log(`${ app_name } server run on port ${ port }`.bgMagenta);
})