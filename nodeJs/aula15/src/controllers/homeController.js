exports.paginaInicial = (req, res) => {
    // Agora podemos usar requisições session e flashs nos controllers
    //req.session.usuario = { nome: 'Erick', logado: true} // Criamos um usuario que vai ficar salvo nos cookies por 7 dias mesmo que exclua ele
    //console.log(req.session.usuario); // Aqui vemos nosso usuario que já foi salvo
    // req.flash('info', 'Hello world!');
    // req.flash('error', 'ERROR 304');
    // req.flash('success', 'Blaaaaaaaa');
    console.log(req.flash('error'), req.flash('success'), req.flash('info')) // Esta mensagem só vai ser exibida uma vez, assim que att a página elas vão sumir
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body)
    return;
}