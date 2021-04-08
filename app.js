const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const path = require('path');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const schoolRouter = require('./routes/schoolRoutes');
const classRouter = require('./routes/classRoutes');

const app = express();

app.use(express.static(path.join(__dirname, './client/build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

// 1) GLOBAL MIDDLEWARES
// Implement CORS
app.use(cors());
app.options('*', cors());

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API (150 requests per hour)
const limiter = rateLimit({
  max: 150,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// 2) ROUTES
app.use('/api/users', userRouter);
app.use('/api/schools', schoolRouter);
app.use('/api/classes', classRouter);

app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});

app.use(globalErrorHandler);

module.exports = app;
