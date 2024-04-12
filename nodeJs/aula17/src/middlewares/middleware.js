exports.middleWareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local'
    next();
}

exports.outroMiddleware= (req, res, next) => {
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404'); // Carregando o view com nome de 404, para representar o erro
    }
}

exports.csrfMiddleware = (req, res, next) => { //Importando o token para todas as páginas que eu tiver
    res.locals.csrfToken = req.csrfToken();
    next();
}