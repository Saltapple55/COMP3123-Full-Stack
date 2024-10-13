
const express = require("express")

const BookModel = require("../models/books") //a mongoose model can use mongoose query methods
const Book = require("../models/books")
const routes = express.Router()

//Get All Books
routes.get("/books", (req, res) => {
    //get all books 
    BookModel.find().then((books)=>{
        res.send(books)
    }).catch((err)=>{
        res.status(500).send({message: err.message})
    })
})

//Add NEW Book
routes.post("/books", async (req, res) => {

    const bookData = req.body
    console.log(bookData)
    try{
        const book = new BookModel(bookData)
        const newBook = await book.save()
        res.send(newBook)
    } catch(err){
        res.status(500).send({message: err.message})
    }
})

/*
 BookModel.findByIdAndUpdate(req.params.bookid, req.body, {new: true})
    .then((book) => {
        if(book) {
            res.send(book)
        } else {
            res.status(404).send({message: "Book not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
        */

//Update existing Book By Id
routes.put("/book/:bookid", (req, res) => {
    BookModel.findByIdAndUpdate(req.params.bookid)
    .then((book) => {
        if(book) {
            console.log('book updating')
            res.send(book)
        } else {
            res.status(404).send({message: "Book not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
    })
})

//Delete Book By ID
routes.delete("/book/:bookid", (req, res) => {
    BookModel.findByIdAndDelete(req.params.bookid)
    .then((book) => {
        if(book) {
            res.send(book)
        } else {
            res.status(404).send({message: "Book not found"})
        }
    }).catch((err) => {
        res.status(500).send({message: err.message})
})
})

//Get Book By ID
routes.get("/book/:bookid", (req, res) => {
    BookModel.findById(req.params.bookid).then()

    res.send({message: "Get Book By ID"})
})

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({message: "Get All Books in sorted order"})
})

module.exports = routes