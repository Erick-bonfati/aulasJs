exports.middleWareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local'// Injeta uma variavel somente dentro da resposta que pedirmos, pode ser o que 
    //você quiser, array, func, classe...
    next();
}