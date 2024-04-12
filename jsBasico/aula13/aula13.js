// funções executam valores

                //criamos um parametro para esta função e depois podemos atribuir um valor chamando ela
function saudacao(nome) {
    //console.log(`Bom dia! ${nome}`);
    //return 123456; // usando return nós falamos o que nossa função vai retornar
    return `Bom dia! ${nome}`; // assim fazemos com que a função retorne o que desejamos
}

saudacao(); // O valor é salvo na variavel e depois podemos manipular como preferir
saudacao('Erick') // aqui nós chamamos a função e atribuimos um valor para ela
saudacao('Luiz') // podemos também trocar o valor que aparece na função


const variavel = saudacao('Luiz');
console.log(variavel); // aqui vai aparecer como undefined, pois só chamados a função sem atribuir o que ela vai retornar

         // podemos deixar um valor padrão para nossa função caso ela não receba nenhum valor futuro
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
    //Sempre que o javascript encontrar o RETURN ele vai parar todos os processos da função, toda função se finaliza no return
}

console.log(soma());
console.log(soma(2, 2)); // atribuimos uma função com dois valores, transformamos em numero e fizemos a soma dentro da função
console.log(soma(3, 1));
console.log(soma(5, 10));

// Não podemos modificar o que está dentro da função

// const resultado = soma(); como nenhum valor foi atribuido ele vai fazer a conta de acordo com os valores padrões declarados inicialmente
// porém a partir do momento que declaramos qualquer que seja, o valor padrão deixara de existir
const resultado = soma('Erick', ' Bonfati'); // aqui salvamos o valor na variavel
console.log(resultado)

// CONTROL + K + C = Comenta todas as linhas selecionadas
// CONTROL + K + U = Descomenta todas as linhas selecionadas

// Criando uma variavel dentro de uma função

// Neste caso á variável raiz recebe o valor de uma função anonima
//const raiz = function (n) {
//    return n ** 0.5; // fazemos retornar a raiz quadrada da nossa função
//}; Neste caso como a minha variável recebe um valor precisamos finalizar com ponto e virgula: ';'


// Se chama arrowfunction e faz a mesma coisa que acima porém facilita muito na criação, e assim só funciona caso você tiver somente um valor
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// É mais interresante criar várias funções com somente uma especialidade do que criar uma função com várias especialidades

