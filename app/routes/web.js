var clienteController = require('../controllers/clienteController');

module.exports = function(app) {

    app.get('/contato', function(req, res) {
        res.render('site/contato');
    });
    
    app.get('/', function(req, res) {
        clienteController.index(req, res);
    });
    
    app.get('/detalhe/:id', function(req, res) {
        clienteController.show(req, res);
    });
}