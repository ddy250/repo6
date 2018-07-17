var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var i=0;
var information = require('./info');

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

app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank you!');
    information[i]=req.body.firstname;
    information[i+1]=req.body.lastname;
    information[i+2]=req.body.series1;
    information[i+3]=req.body.series1;
    i=i+4;
    var j;

    for(j=0; j<information.length; j++){
      console.log(information[j]);
    }

});

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
