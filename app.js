var http = require('http');

var server = http.createServer(function(req, res) {
    var pagina = req.url;
    console.log(pagina);
    res.end('Url = '+ pagina);
});

console.log('http://localhost:3000')
server.listen(3000);