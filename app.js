var http = require('http');

var server = http.createServer(function(req, res) {
    var pagina = req.url;
    console.log(pagina);

    if(pagina == '/contato'){
        res.end(`
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
    } else {
        res.end(`
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
    }
    
});

console.log('http://localhost:3000')
server.listen(3000);