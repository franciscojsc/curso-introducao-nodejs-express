var db = require('../../config/db');

module.exports = function() {

    this.all = function(callback) {

        var con = db();

        con.query('select * from clientes', callback);

    };

    this.find = function(id, callback) {

        var con = db();

        con.query('select * from clientes where id = ?', id, callback);
    }

    this.save = function(dados, callback) {

        var con = db();

        con.query('insert into clientes set ?', dados, callback);
    }

    return this;

};