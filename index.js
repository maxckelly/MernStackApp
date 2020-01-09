const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Heroku wont always use port 5000
const PORT = process.env.PORT || 5000

const app = express();

// const DB_URL = 'mongodb://localhost:27017/lasagne-app-db';

// fixes error on nodemon startup error
const dbConfig = {useNewUrlParser: true, useUnifiedTopology: true}

// Mongoose
mongoose.connect(process.env.DB_URL, dbConfig, (error) => {
  if (error) {
    console.log(`error X`)
  } else {
    console.log('connected to db :)')
  }
});


// Middleware
// Logging
app.use(morgan('dev'));
// To make two different URLS to talk to each other through fetch();
app.use(cors({
  // The below is saying that local host 3000 is the only one allowed to make the request to localhost 5000.
  origin: "http://localhost:3000"
}));

// This connects the entry level file to the index of routes.
app.use(require('./routes/index'));

app.listen(PORT,  () => console.log(`Listening on port ${PORT}`))