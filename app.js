var app = require('./config/server');

app.get('/contato', function(req, res) {
    res.render('site/contato');
});

app.get('/', function(req, res) {
    res.render('site/index');
});

app.listen(3000, function(){
    console.log('http://localhost:3000')
});