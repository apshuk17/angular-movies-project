import * as express from 'express';
import { Application } from 'express';
import * as mongoose from 'mongoose';
import * as _ from 'lodash';

const users = require('./routes/users');
const auth = require('./routes/auth');
const movies = require('./routes/movies');

// Connect to database
mongoose.connect('mongodb+srv://apshuk14:LASMl8eosKlyiFxp@cluster0-gzkou.mongodb.net/video')
.then(res => console.log('Connected to mongodb....'))
.catch(err => console.log(err));

// Initialising port
const port = process.env.PORT || 9000;

// Initialising Express App
const app = express();

// parsing json req body
app.use(express.json());

// Users route
app.use('/api/users', users);

// Auth route
app.use('/api/auth', auth);

// Movies route
app.use('/api/movies', movies);

// Handling get request
app.get('/', (req, res) => {
    res.send('Angular Express app...');
});

// Running the server
app.listen(port, () => console.log(`Server is running on port ${port}...`));
