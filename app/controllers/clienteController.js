var clienteModels = require('../models/clienteModel')();

module.exports.index = function(req, res) {
    clienteModels.all(function(error, resultado) {
        res.render('site/index', {clientes: resultado});
    });
};

module.exports.store = function() {

};

module.exports.show = function() {

}; 