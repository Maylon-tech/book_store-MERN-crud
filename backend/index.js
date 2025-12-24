import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/config.js'

const app = express()
dotenv.config()
app.use(express.json())
connectDB()

const PORT  = process.env.PORT || 5000

app.get("/", (req, res) => {
    console.log(req)
    return res.status(234).send("Welcome to MERN stack application tutorial.")
})

app.listen(PORT, () => {
    console.log(`App is listening to port, ${PORT}`)
})