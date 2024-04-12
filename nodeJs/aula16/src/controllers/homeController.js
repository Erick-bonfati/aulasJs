exports.paginaInicial = (req, res) => {
    res.render('index', { //  Aqui estamos injetando dados na nossa paginaInicial, que é o index.ejs
        titulo: 'Este será o <span style="color: red;"> titulo </span> da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body)
    return;
}