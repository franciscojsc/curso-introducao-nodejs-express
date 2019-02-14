var clienteModels = require('../models/clienteModel')();

module.exports.index = function(req, res) {
    clienteModels.all(function(error, resultado) {
        res.render('site/index', {clientes: resultado, erros: {}, dados: {}});
    });
};

module.exports.store = function(req, res) {

    var dados = req.body;

    req.assert('nome', 'Preencha o nome').notEmpty();
    req.assert('email', 'Preencha o email').notEmpty();
    req.assert('nome', 'Nome deve ter de 3 a 20 caracteres').len(3, 20);
    req.assert('email', 'Preencha um E-mail válido').isEmail();

    var validacaoErros = req.validationErrors();

    if(validacaoErros){
        console.log(validacaoErros);
        clienteModels.all(function(erro, resultado){
            res.render('site/index', {clientes: resultado, erros: validacaoErros, dados: dados});
        });
        return;
    }

    clienteModels.save(dados, function(error, resultado) {
        try{

            if(!error){
                throw "Erro ao adicionar o cliente";
            }

       }catch(ex) {

            console.error(ex);

       }finally{

        res.redirect('/');

       }
    });
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