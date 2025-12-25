import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/config.js'
import { Book } from './models/usersModels.js'

const app = express()
// middleware for parsing req.body
app.use(express.json())

dotenv.config()
app.use(express.json())
connectDB()

const PORT  = process.env.PORT || 5000

app.get("/", (req, res) => {
    return res.status(234).send("Welcome to MERN stack application tutorial.")
})

// Route for Save a new book
app.post("/books", async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }

        const book = await Book.create(newBook)

        return res.status(201).send(book)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})

// Route Get All books
app.get("/books", async (req, res) => {
    try {
        const books = await Book.find({})

        return res.status(200).json({
            count: books.length,
            data: books
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})

// Route Get One book by ID
app.get("/books/:id", async (req, res) => {
    try {
        const { id } = req.params

        const book = await Book.findById(id)

        return res.status(200).json(book)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})

// Route Update book by ID - getting and editing
app.put("/books/:id", async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            })
        }

        const { id } = req.params

        const result = await Book.findByIdAndUpdate(id, req.body)

        if (!result) {
            return res.status(404).json({ message: "Book not found."})
        }

        return res.status(200).json({
            message: "Book updated successfully."
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
})

app.listen(PORT, () => {
    console.log(`App is listening to port, ${PORT}`)
})