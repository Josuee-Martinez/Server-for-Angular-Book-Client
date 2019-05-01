var express = require('express'); //1
var router = express.Router();
var sequelize = require('../db');
var BookModel = sequelize.import('../models/book');

router.post('/createbook', function (req, res) {
  var nameofbook  = req.body.books.nameOfBook;
  var author  = req.body.books.author;
  var genre  = req.body.books.genre;
  var pubyear  = req.body.books.pubYear;
  var rating  = req.body.books.rating;

  BookModel
    .create({
      nameOfBook: nameofbook,
      author: author,
      genre: genre,
      pubYear: pubyear,
      rating: rating
    })
    .then(
      function createSuccess(books) {
        res.json({
          books: books
        });

      },
      function createError(err) {
        res.send(500, err.message);
      }
    );
});

router.get('/getbook', (req, res) => {
  BookModel.findAll({
    attributes: ['id', 'nameOfBook', 'author', 'genre', 'pubYear', 'rating']
  }).then(function findSuccess(data) {
    console.log('book data', data); 
    res.json(data);
  },
  function findAllError(err) {
    res.send(500, err.message)
  })
});

router.delete('/delete:id', (req, res) => {
  var data = req.params.id;

  BookModel.destroy({
    where: { id: data}
  }).then(function deleteSuccess(data) {
    res.send('deleted successfully');
  },
  function deleteError(err) {
    res.send(500, err.message)
  })
});

router.put('/update:id', (req, res) => {
  updateId = req.params.id
  updateNameOfBook = req.body.books.nameOfBook;
  updateAuthor = req.body.books.author;
  updateGenre = req.body.books.genre;
  updatePubYear= req.body.books.pubYear;
  updateRating = req.body.books.rating;

  BookModel.update({
    nameOfBook: updateNameOfBook,
    author: updateAuthor,
    genre: updateGenre,
    pubYear: updatePubYear,
    rating: updateRating
  }, {where: {id: updateId}})
  .then(function updateSuccess() {
    res.json({
      nameOfBook: updateNameOfBook,
      author: updateAuthor,
      genre: updateGenre,
      pubYear: updatePubYear,
      rating: updateRating
    })
  }, function updateError(err) {
    res.send(500, err.message)
  })
})

module.exports = router;