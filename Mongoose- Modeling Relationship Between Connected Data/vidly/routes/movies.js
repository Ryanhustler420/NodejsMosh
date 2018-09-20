const { Movie, validate } = require('../models/movie');
const { Genre } = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const movie = await Movie.find().sort('name');
  res.send(movie);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const genres = createGenre(req.body.genres)

  let movie = new Movie({ title : req.body.title ,genres });
  movie =  await movie.save();

  res.send(movie);
});


function createGenre(arrOfGenre){
    arr = [];
    arrOfGenre.forEach(function(element) {
        arr.push(new Genre({name:element.name}));
    });
    return arr;
}

module.exports = router;