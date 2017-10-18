'use strict'

const express = require('express'),
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),

      caesar = require('./routes/caesar/routes'),
      columnar = require('./routes/columnar/routes'),
      vernam = require('./routes/vernam/routes')

var app = express();

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// app.use(favicon(__dirname + '/scr/assets/img/favicon.ico'));
app.use(bodyParser.json());

app.use('/api', caesar);
app.use('/api', columnar);
app.use('/api', vernam);

module.exports = app;