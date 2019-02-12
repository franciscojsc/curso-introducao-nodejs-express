var db = require('../../config/db');

module.exports = function() {

    this.all = function() {

        var con = db();
        
        con.query('select * from clientes', function(error, resultado) {
            console.log(resultado);
        });

        return [{nome: "Francisco", email: "contato@franciscochaves.com.br"}];
    };

    return this;

};