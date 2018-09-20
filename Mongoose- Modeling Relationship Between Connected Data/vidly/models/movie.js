const Joi = require('joi');
const mongoose = require('mongoose');
const { GenreSchema } = require('./genre');

const Movie = mongoose.model('Movie',new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    genres:[GenreSchema]
}));

function validateMovie(movie) {
    const schema = {
        title : Joi.string().min(3).required(),
        genres: Joi.array()
    };

    return Joi.validate(movie, schema);
}

exports.Movie = Movie;
exports.validate = validateMovie;
  