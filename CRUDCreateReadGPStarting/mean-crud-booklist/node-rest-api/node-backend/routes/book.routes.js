const express = require('express');
const app = express();
 
const bookRoute = express.Router();
let Book = require('../model/Book');
 
// Get all Books
bookRoute.route('/').get((req, res) => {
    Book.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get books: ${error}`);
  })
})

// Add a book
bookRoute.route('/add-book').post((req, res) =>{
  Book.create(req.body).then(() =>{
    console.log('Book added successfully.');
  })
  .catch((error) =>{
    console.error(`Could not save book: ${error}`);
  })
})

module.exports = bookRoute;