var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'curso_node'
});

module.exports = function() {

    this.all = function() {

        con.query('select * from clientes', function(error, resultado) {
            console.log(resultado);
        });

        return [{nome: "Francisco", email: "contato@franciscochaves.com.br"}];
    };

    return this;

};