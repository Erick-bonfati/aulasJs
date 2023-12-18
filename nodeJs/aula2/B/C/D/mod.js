// Criar um módulo que faz só uma coisa

// module.exports = function(x, y) {
//     return x * y;
// }

//Conseguimos usar esta função dentro do modulo também
//console.log(module.exports(2, 2));


module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está fazendo au au`)
    }
}