const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    res.render('contato', {
        contato: {}
    });
};

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors)
            req.session.save(() => res.redirect('/contato/index'));
            return;
        }

        req.flash('success', 'Contato registrado com sucesso')
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`)); // Redireciona diretamente para onde o novo contato foi criado
        return;

    } catch(e) {
        console.log(e);
        res.render('404');
    }
}

// Exportando uma função para poder editar os contatos criados
exports.editIndex = async function(req, res) {
    if(!req.params.id) return res.render('404'); // se não receber um id aqui ele vai retornar uma página de erro
    
    const contato = await Contato.buscaPorId(req.params.id); // aqui estamos chamando uma promise para validar se o id é uma string
    
    if(!contato) return res.render('404'); // se o usuario não existir vamos renderizar uma página de erro

    res.render('contato', { contato });
}