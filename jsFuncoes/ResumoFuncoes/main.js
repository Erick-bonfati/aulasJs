// Resumo de cada tipo de função


// Funções geradoras => são funções que faz com que o código quase pause, usamos yield para criar um valor nela, e next para ir para o próximo valor

// Ex:

function* gerador() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = gerador();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);


// Funções recursivas => São funções que se chamam sozinhas e elas tem um limite que pode se chamar de volta

// Ex:

function recursiva(max) {
    console.log(max);
    if(max >= 10) return; 
    max++; 
    recursiva(max); 
}

recursiva(0);

// Funções Construtoras => é uma função que sempre começa com letra Maiscula, e precisamos sempre usar a palavra 'new' para invocar ela

// Ela é muito boa para usar objetos de maneira simplificada

// Ex:

function Pessoa(nome) {
    this.nome = nome
}

const p = new Pessoa('Erick') // {nome: 'Erick}

console.log(p.nome); // Erick


// Funções Factory => toda função factory retorna um objeto, e chamamos um método através de um objeto por ela

// Ex:

function padrao(nome, sobrenome) {
    return {
        //Attributo
        nome,

        //Método
        sobrenome() {
            return sobrenome;
        }
    };
}

const pad = padrao('Erick', 'Bonfati');

console.log(pad.nome, pad.sobrenome());


// Funções imediatas => são funções invocadas imediatamente, ela foge do escopo global e usamos entre parenteses (function)

// Ex:

(function imediata(a, b) {

    const ab = a + b

    console.log(ab);

})(2, 5); // parametro


//Funções de callback => são funções que só são chamadas quando determinada ação acontece/finaliza

// Ex: 

function f4(callback) {
    setTimeout(function() { // estamos simulando algo que demoraria na web
        console.log('f4');
        if(callback) callback(); // somente para verificar se callback existe
    }, 5000); // 5000ms = 5 segundos
}

f4();


// O que é função closure?
// Closure é um conceito da programação que se refere à habilidade de uma função se lembrar e acessar variáveis em um escopo externo, 
// mesmo que após a execução dessa função ter sido finalizada.


// Escopo léxico - conhece o local onde ela foi declarada, tudo que está declarado dentro dele e o que está nos vizinhos dela


// Retorno de funções

// return = retorna um valor, termina a função

function soma(a, b) {
    return a + b; // return vai retornar o valor das contas
}

// diferença de console.log e return

console.log(soma(5, 2)); // O console.log está apenas exibindo oq estou pedindo para ele exibir

function soma2(a, b) {
    console.log(a + b); // aqui está apenas exibindo o que passei para ele exibir
}

soma2(5, 2);

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa('Erick', 'Bonfati'); // essa variavel vai receber os argumentos da função 'criaPessoa'

