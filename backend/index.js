import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './db/config.js'
import booksRoute from './routes/booksRoute.js'

const app = express()
// middleware for parsing req.body
app.use(express.json())

dotenv.config()
app.use(express.json())
connectDB()

// option 01
app.use(cors())

// option 02
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

const PORT  = process.env.PORT || 5000

app.get("/", (req, res) => {
    return res.status(234).send("Welcome to MERN stack application tutorial.")
})

// Setting Express Router API
app.use("/books", booksRoute)



app.listen(PORT, () => {
    console.log(`App is listening to port, ${PORT}`)
})