import * as express from 'express';
import { Router } from 'express';
import * as mongoose from 'mongoose';
import * as _ from 'lodash';
import * as bcrypt from 'bcrypt';

const { validate, User } = require('../models/users');

const router = express.Router();


// Handling post request
router.post('/', async (req, res) => {
    console.log('User Data: ', req.body);
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // check user already exists
    let user = await User.findOne({email: req.body.email});
    if (user) {
        return res.status(400).send('User already exist');
    }

    user = new User(_.pick(req.body, ['name', 'email', 'password', 'isAdmin']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    res.send(_.pick(user, ['name', 'email', 'isAdmin']));
});

module.exports = router;
