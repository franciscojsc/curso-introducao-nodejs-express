var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    var pagina = req.url;
    console.log(pagina);

    if(pagina == '/contato'){
        fs.readFile( `${__dirname}/site/${pagina}.html`, function(err, html){
            res.end(html);
        });
        
    } else {
        fs.readFile( `${__dirname}/site/${pagina}.html`, function(err, html){
            res.end(html);
        });
    }
    
});

console.log('http://localhost:3000')
server.listen(3000);