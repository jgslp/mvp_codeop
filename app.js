var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter = require('./routes/students');
var sessionsRouter = require('./routes/sessions');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// you can delete if you want or just delete users and keep the index
app.use('/users', usersRouter);
app.use('/', indexRouter);
app.use('/students', studentsRouter);
app.use('/', sessionsRouter);

module.exports = app;
