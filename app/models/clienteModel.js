var db = require('../../config/db');

module.exports = function() {

    this.all = function(callback) {

        var con = db();

        con.query('select * from clientes', callback);

    };

    return this;

};