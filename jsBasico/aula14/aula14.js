const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
console.log(array);

// Para criar um array usamos colchetes "[]"

// Para criar um objeto usamos chaves "{}"

const pessoa1 = {
    nome: 'Erick',
    sobrenome: 'Bonfati',
    idade: 18 // Usamos virgula para separar as variaveis
};

console.log(pessoa1.nome);  // selecionamos a função e buscamos pela variavel dentro dela
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };  
// }  Assim é da maneira mais extensa

function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }; //Fazendo assim o identificador do JS vai entender que queremos criar a variavel de acordo com o parametro
}

const pessoa = criaPessoa('Erick', 'Bonfati', 18)  //O Valor que passamos aqui são basicamente algumentos que são enviados para os parametros da função
const pessoa2 = criaPessoa('Ericka', 'Bonfata', 21)
const pessoa3 = criaPessoa('Joao', 'Tavares', 34)
const pessoa4 = criaPessoa('Luiz', 'ronaldo', 54)
const pessoa5 = criaPessoa('Fernando', 'cavalcanti', 49)

console.log(pessoa.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);

const pessoa0 = {
    nome: 'Erick',
    sobrenome: 'Bonfati',
    idade: 18,

    //Abaixo estamos criando um método para poder utilizar junto da função
    fala() { //O argumento "THIS" é usado para referenciar a função atual
        console.log(`A minha idade atual é ${this.idade} anos e ${this.nome} ${this.sobrenome} está falando oi... `)
    },

    incrementaIdade() {
     this.idade++; // Aqui é sempre que chamarmos este método ele vai implementar a variavel selecionada e adicionar mais um...
    }
};


//Aqui nós estamos fazendo com que o método incrementaIdade vá adicionando 1 por 1
pessoa0.fala();
pessoa0.incrementaIdade();
pessoa0.fala();
pessoa0.incrementaIdade();
pessoa0.fala();
pessoa0.incrementaIdade();
pessoa0.fala();
pessoa0.incrementaIdade();
pessoa0.fala();
pessoa0.incrementaIdade();
pessoa0.fala();

