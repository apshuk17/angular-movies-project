import * as express from 'express';
import { Router } from 'express';
import * as mongoose from 'mongoose';
import * as _ from 'lodash';
import * as bcrypt from 'bcrypt';

const Joi = require('joi');
const { User } = require('../models/users');

const router = express.Router();

// auth request
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // find user
    const user = await User.findOne({email: req.body.email});
    if (!user) {
        return res.status(400).send('Invalid user or password');
    }

    // validate password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Invalid user or password');
    }

    res.status(200).send(_.pick(user, ['email', 'isAdmin']));
});

const validate = (user) => {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(1024).required(),
    };

    return Joi.validate(user, schema);
};

module.exports = router;
