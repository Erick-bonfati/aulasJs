// module.exports = (req, res, next) => {
//     if(req.body.cliente) {
//         req.body.cliente = req.body.cliente.replace('Miranda', 'NÃO USE MIRANDA') // caso o cliente digite algo especifico dentro do replace ele
//         // avisa para não usar isso
//         console.log(); // Para dar um espaço no console
//         console.log(`Vi que você postou ${req.body.cliente}`)
//         console.log();
//     }
//     next();
// }

exports.middleWareGlobal = (req, res, next) => {
    console.log('Sou o middleware global')
    next();
}

exports.outroMiddleware = (req ,res, next) => {
    console.log('Sou o outro middleware')
    next();
}