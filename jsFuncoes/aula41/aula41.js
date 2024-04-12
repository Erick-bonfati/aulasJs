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

const p1 = criaPessoa('Erick', 'Bonfati'); // essa variavel vai receber os dados do return da função

const p2 = {
    nome: 'Joao',
    sobrenome: 'Oliveira'
}


// De uma maneira bem complexa

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá'); // criamos a primeira variavel que vai virar uma função dentro da 'falaFrase' e dentro da falaFrase damos o argumento
// do parametro dela, de principio, ela só vai executar que isso é uma função pois ainda está só retornando a função dentro dela
const resto = fala('mundo!'); // assim pegamos uma variavel para fazer com que selecione a função primaria e a função dentro da função
// isso porque fizemos a primeira variavel virar uma função e assim ela abrange a funcao 'falaResto' como um argumento que está sendo enviado para o 
// parametro 'resto'
console.log(resto);




// Vamos criar funções para duplicar, triplicar e quadriplicar um numero

function duplica1(n) {
    return n * 2;
}

function triplica1(n) {
    return n * 3;
}

function quadriplica1(n) {
    return n * 4;
}

console.log(duplica1(2));
console.log(triplica1(2));
console.log(quadriplica1(2));

// Percebesse que precisamos criar 3 funções para fazer 3 contas diferentes, usando o metodo de varias funções dentro de uma, podemos fazer assim:

function criaMultiplicador(multiplicador) { // usamos o primeiro parametro como um multiplicador

    // multiplicador está neste escopo

    return function(n) { // criamos uma função que já retorna logo de cara o valor
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2); // a variavel vira uma função da função dentro do 'criaMultiplicador
const triplica = criaMultiplicador(3); // passamos qual numero vai utilizar no multiplicador
const quadriplica = criaMultiplicador(4);

console.log(duplica(2)); // usamos a função virou uma variavel e passamos o parametro da função de dentro da primeira função
console.log(triplica(2)); // passamos qual numero vai ser o base para utilizar junto do multiplicador
console.log(quadriplica(2));