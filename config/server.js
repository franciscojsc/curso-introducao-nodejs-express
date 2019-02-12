var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

var rotas = require('../app/routes/web');
rotas(app);

module.exports = app;