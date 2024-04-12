// Vamos imaginar que aqui seja algum módulo que contenha alguns códigos

const nome = 'Luiz'

const sobrenome = 'Bonfati'

const falaNome = () => nome + ' ' + sobrenome;

// Agora queremos exportar o que fizemos acima, o node nós disponibiliza um objeto que a gente pode coisas neste objeto e exportar isso para fora do
// módulo

//console.log(module)  //Esse module é o objeto vazio do node que pode ser exportado para fora do Modulo

module.exports.nome = nome; // aqui estamos exportando a chave nome com o valor 'nome' que é a variavel que criamos acima.

exports.sobrenome = sobrenome; // e podemos abreviar isso também

exports.falaNomeCompleto = falaNome; // a nome da chave não precisa ser o mesmo nome do que estamos exportando

this.qualquerCoisa = 'O que eu quiser exportar'; // a palavra 'this' também serve como um 'exports' ou 'module.exports'

//console.log(module.exports); // mostra um objeto com as chaves que já foram exportadas


class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

exports.Pessoa = Pessoa


module.exports.nome2 = 'Erick' // exportando diretamente no exports

this.sobrenome2 = 'Qualquer outra coisa que eu quiser'

// Podemos também exportar tudo dentro de chaves

// module.exports = {
//     nome, sobrenome, Pessoa
// };