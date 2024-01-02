exports.middleWareGlobal = (req, res, next) => {
    console.log('Sou o middleware global')
    next();
}