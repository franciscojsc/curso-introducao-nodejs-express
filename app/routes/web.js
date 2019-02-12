var clienteModels = require('../models/clienteModel')();

module.exports = function(app) {

    app.get('/contato', function(req, res) {
        res.render('site/contato');
    });
    
    app.get('/', function(req, res) {
        var listaClientes = clienteModels.all();
        res.render('site/index', {clientes: listaClientes});
    });
    
}