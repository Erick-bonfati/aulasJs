// Revisando objetos 

// Literal de uma string: '' "" ``

// Array literal: []

// Numero literal: 1,2,3,4

// Função literal: function() {}

//Um objeto literal é feito por {}


//Corpo do objeto: Um objeto é formado por um par, corpo e objeto
// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Bonfati'
// };

//const chave = 'nome';
//console.log(pessoa[chave]); // passamos o objeto nome para uma variavel e depois chamamos esse variavel de forma dinamica

//console.log(pessoa.nome);
//console.log(pessoa.sobrenome);

// Podemos usar uma função construtora para criar um objeto também

const pessoa1 = new Object();
pessoa1.nome = 'Erick';
pessoa1.sobrenome = 'Bonfati';
pessoa1.idade = '18';
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome`)
};

pessoa1.falarNome();

//delete pessoa1.nome; // deletamos o objeto nome da variavel
//console.log(pessoa1);

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());


for(chave in pessoa1) {
    console.log(chave);
}


//Factory function / Constructor function / Classes - são mais padrões de projetos que podemos escolher

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        // Getter proteje o metodo dentro da função, não conseguimos setar ele e lugar nenhum fora aqui
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}


// quando apontamos para uma variavel, o Javascript está buscando no (ENDERECOMEMORIA) o valor que estamos querendo mudar
const p1 = criaPessoa('Luiz', 'bonfati'); 
Object.freeze(p1); // travamos o objeto de receber qualquer tipo de modificação por fora
p1.nome = 'Outro nome'; // nesse caso mudamos o nome do valor que o objeto receberia e não da variavel em si

// o que não podemos fazer é assim: p1 = 'Outro nome' porque assim estaria tentando mudar o valor da variavel em si

console.log(p1.nomeCompleto); // passamos o método sem precisar executar ele

// Constructor function - o construtor é a função que criou o objeto, no caso abaixo é 'Pessoa'

function Pessoa(nome, sobrenome) {
    this.nome = nome; // referenciamos com 'this' pois estamos acessando um objeto declarado fora da função
    this.sobrenome = sobrenome;

    //Podemos travar que qualquer valor aqui seja alterado usando freeze:
    // Object.freeze(this);
}

// A palavra 'new' = cria um objeto vazio {} <- e depois ele pega a palavra 'this' e atrela ela dentro da função que estamos referenciando ao objeto

const p2 = new Pessoa('Luiz', 'Miranda'); // aqui criamos um objeto e passamos o atributo que vai ser jogado dentro da função 'Pessoa' e ai retorna esse 'this'

console.log(p2);



// Object.freeze(); pode travar um objeto ou array de fazer qualquer modificação
