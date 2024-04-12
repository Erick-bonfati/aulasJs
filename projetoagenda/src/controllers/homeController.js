const Contato = require('../models/ContatoModel');

// Injetando os contatos criados dentro do Index
exports.index = async(req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos });
};