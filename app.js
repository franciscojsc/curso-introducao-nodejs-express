var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/contato', function(req, res) {
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>
                Introdução ao Node JS
            </title>
        </head>
        <body>
            <h1>Página de Contato</h1>
        </body>
    </html>
    `);
});

app.get('/', function(req, res) {
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>
                Introdução ao Node JS
            </title>
        </head>
        <body>
            <h1>Página de Home</h1>
        </body>
    </html>
    `);
});

app.listen(3000, function(){
    console.log('http://localhost:3000')
});