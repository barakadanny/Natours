const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet'); // set security HTTP headers
const mongoSanitize = require('express-mongo-sanitize'); // sanitize user input from malicious MongoDB operators
const xss = require('xss-clean'); // clean user input from malicious HTML code
const hpp = require('hpp'); // prevent HTTP parameter pollution
const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

// 1) GLOBAL MIDDLEWARES
// * Set security HTTP headers
app.use(cors());
app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
      directives: {

        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"],
        connectSrc: ["'self'", "http://localhost"],
        connectSrc: ["'self'", "ws://localhost:59122/"]
      },
  })
);

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from the same IP
const limiter = rateLimit({
  max: 100, // 100 requests from the same IP in 1 hour
  windowMs: 60 * 60 * 1000, // 1 hour
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' })); // limit the size of the body to 10kb
app.use(cookieParser()); // parse the cookie header and body into req.body and req.headers

// Data sanitization against NoSQL query injection 
// (e.g. { "email": { "$gt": "" }, "password": "password1234" })
// (e.g. { "email": { "$gt": "" }, "password": { "$gt": "" } })
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
// e.g. /api/v1/tours?sort=duration&sort=price
app.use(hpp({
  // Whitelist allows duplicate parameters in the query string
  whitelist: [
    'duration',
    'ratingsQuantity',
    'ratingsAverage',
    'maxGroupSize',
    'difficulty',
    'price'
  ]
}));

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies)
  next();
});

// 3) ROUTES
app.use('/', viewRouter)

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
