require('dotenv').config();

import { app } from './app'
import connectDB from './utils/db'
import { v2 as cloudinary } from 'cloudinary'



// CLOUDINARY CONFIG
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME as string,
    api_key: process.env.CLOUD_API_KEY as string,
    api_secret: process.env.CLOUD_SECRET_KEY as string,
})


// CREATE SERVER

app.listen(process.env.PORT, () => {
    console.log(`Server is connected with port ${process.env.PORT}`)
    connectDB()
})