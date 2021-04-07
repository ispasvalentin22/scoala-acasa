const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');

app.use(proxy(['/api'], { target: 'http://localhost:4000' }));

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/client/build'));
}

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
