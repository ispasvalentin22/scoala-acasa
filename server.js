const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

// app.use(proxy(['/api'], { target: 'http://localhost:4000' }));
app.use(
  '/api',
  createProxyMiddleware({ target: 'https://localhost:4000', changeOrigin: true })
);

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


app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
