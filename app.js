const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {notFound} = require('./helpers/responseApi')
const { sequelize } = require('./db/models'); // import models


// import routes
const homeRouter = require('./routes/home');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
// Routes API V1
app.use('/api/v1/index', require('./routes/api/v1/index'));
app.use('/api/v1/users', require('./routes/api/v1/users'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  return notFound(res);
  //next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully!');
}).catch((err) => {
  console.error('Can\'t establish database connection:\n' + err);
});

module.exports = app;
