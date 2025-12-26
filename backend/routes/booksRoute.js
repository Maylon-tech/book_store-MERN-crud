import express from 'express'
const route = express.Router()
import {
    CreateBook,
    deleteBook,
    GetAllBooks,
    GetOneBook,
    updateBook
 } from '../controllers/booksControrllers.js'


// Route for Save a new book
route.post("/", CreateBook)

// Route Get All books
route.get("/", GetAllBooks)

// Route Get One book by ID
route.get("/:id", GetOneBook)

// Route Update book by ID - getting and editing
route.put("/:id", updateBook)

// Route Delete book by ID 
route.delete("/:id", deleteBook)


export default route