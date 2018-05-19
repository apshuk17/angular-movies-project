import * as mongoose from 'mongoose';

const Joi = require('joi');

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rated: String,
    runtime: Number,
    countries: [ String ],
    genres: {
        type: [ String ],
        enum: ['crime', 'adventure', 'drama']
    },
    director: String,
    writers: [ String ],
    actors: [ String ],
    plot: String,
    poster: String,
    imdb: { id: String, rating: Number, votes: Number },
    awards: { wins: Number, nominations: Number, text: String },
    type: String
});

const Movie = mongoose.model('MovieDetail', movieSchema, 'movieDetails');

const validateGenre = (genre) => {
    const schema = Joi.string().min(5).max(20);

    return Joi.validate(genre, schema);
};

const validateGenreWithId = (req) => {
    const schema = {
        genre: Joi.string().min(5).max(20),
        id: Joi.string().length(9)
    };

    return Joi.validate(req, schema);
};

module.exports = {
    Movie,
    validateGenre,
    validateGenreWithId
};
