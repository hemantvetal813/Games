var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cron = require("node-cron");
var knexLogger = require('knex-logger');
var {knex1,knex2} = require('./config/knex');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const Stopwatch=require('./public/oloo');

let oolocopy=Object.create(Stopwatch);

// oolocopy.init('hemant');
oolocopy.showName();
console.log(oolocopy);
var app = express();
app.use(knexLogger(knex1));

cron.schedule("35 11 * * * *", function() {
  console.log("running a task every minute");
});
knex1('master_lob')
  .then(api_tokens => {
    for(let token of api_tokens){
      // let parameters = {};
      // let values = '';
      // Object.keys(token).forEach((key) => {
      //   values = values.concat(',', key);
      //   parameters[key] = token[key];
      // });
      //  console.log(token);
       delete token.id
       knex2('master_lob').insert(token).then(result => console.log(result))
    }
  });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
