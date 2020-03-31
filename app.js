const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect(
  'mongodb://db:27017/',
  {
    userNewUrlParser: true,
    dbName: 'sample_db',
    auth: {
      user: 'root',
      password: 'password',
    },
  }
)

const db = mongoose.connection;
db.once('open', () => console.log('successfully contected to MongoDB'));

app.get('/', (req, res) => res.send('Hello'));

app.listen(3000, () => console.log('app listening on ports 3000'))