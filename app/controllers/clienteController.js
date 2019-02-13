var clienteModels = require('../models/clienteModel')();

module.exports.index = function(req, res) {
    clienteModels.all(function(error, resultado) {
        res.render('site/index', {clientes: resultado});
    });
};

module.exports.store = function() {

};

module.exports.show = function(req, res) {
    clienteModels.find(req.params.id, function(error, resultado) {

       try{

            if(!resultado[0]){
                throw "Esse cliente não existe";
            }

            res.render('site/detalhe', {cliente: resultado[0]});

       }catch(ex) {

            console.error(ex);

            res.redirect('/');

       }

    });
}; 