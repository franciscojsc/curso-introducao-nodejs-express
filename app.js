var express = require('express');

var meuModulo = require('./modulo_extreno');

console.log(meuModulo);

var app = express();

app.set('view engine', 'ejs');

app.get('/contato', function(req, res) {
    res.render('site/contato');
});

app.get('/', function(req, res) {
    res.render('site/index');
});

app.listen(3000, function(){
    console.log('http://localhost:3000')
});