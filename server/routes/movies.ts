import * as express from 'express';
import { Router } from 'express';
import * as mongoose from 'mongoose';
import * as _ from 'lodash';
import { ServerResponse } from 'http';

const Joi = require('joi');

const router = express.Router();

const { Movie, validateGenre, validateGenreWithId } = require('../models/movies');

// Get all distinct genres
router.get('/genres', async (req, res) => {
    const genresAll = await Movie.distinct('genres');
    const activeGenres = genresAll.slice(0, 4);
    const movieCountGenre = [];

    async function processArray(genreArray, resultArray) {
        // map array to promises
        const promises = genreArray.map(async genre => {
            const moviesSelected = await Movie.find({genres: genre, year: {$gte: 2005, $lte: 2010}});
            const moviesCount = moviesSelected.length;
            resultArray.push({ genre, moviesSelected, moviesCount });
        });
        await Promise.all(promises);
        res.status(200).send(resultArray);
    }
    await processArray(activeGenres, movieCountGenre);
});

// Get movies by genre
router.get('/:genre', async (req, res) => {

    const genre = (req.params.genre).replace(/^\w/, (chr) => {
        return chr.toUpperCase();
    });

    const { error } = validateGenre(genre);
    if (error) {
        return res.status(400).send('Bad Request');
    }

    const movies = await Movie.find({genres: genre},
        {title: 1, year: 1, rated: 1, genres: 1, imdb: 1, _id: 0})
        .limit(10);

    res.status(200).send(movies);

});

// Get movies by imdbid
router.get('/:genre/:id', async (req, res) => {

    const { error } = validateGenreWithId(req.params);
    if (error) {
        return res.status(400).send('Bad Request');
    }

    const genre = (req.params.genre).replace(/^\w/, (chr) => {
        return chr.toUpperCase();
    });

    const movie = await Movie.find({genres: genre, 'imdb.id': req.params.id},
        {title: 1, year: 1, rated: 1, genres: 1, imdb: 1, _id: 0});

    res.status(200).send(movie);

});


module.exports = router;
