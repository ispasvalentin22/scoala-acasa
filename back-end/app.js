const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from the server side',
    app: 'Scoala-acasa',
  });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});

app.use(globalErrorHandler);

module.exports = app;
