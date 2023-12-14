//Reduce - Reduzindo o array = é como reduzir o array para um valor só


//               0   1   2  3  4  5  6  7
const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];


// Some todos os números (reduce)

                                    //começamos recebendo primeiro um acumulador, depois um valor, indice e um array
const total = numeros.reduce(function(acumulador, valor, indice, array) { // cada vez que retorno esse acumulador ele volta até acabar o array

    acumulador = acumulador += valor; // o acumulador que começa em zero, e mais o valor de cada array em cada volta

    return acumulador;

}, 0); // valor inicial que o acumulador vai começar

console.log(total);



//Retorna um array com os pares(Filter) - utilize filter para fazer essa função


const pares = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor); // adiciona um elemento do fim do array
    return acumulador;
}, []); // joga o acumulador dentro de um array

console.log(pares);



// Retorne um array com o dobro de valores(Map)

const dobro = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2); // adiciona no acumulador o valor vezes 2
    
    return acumulador;
}, []);

console.log(dobro); // retorna o dobro de cada um dos valores


// Pegar os pares com acumulador da maneira correta

const paresAcumulador = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) {
        acumulador += valor;
    }
    return acumulador;
}, 0); // passamos o zero aqui senão ele vai somar o primeiro numero, que no nosso caso não é um número par

console.log(paresAcumulador);


// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 63 },
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 70 },
];

// aqui segue uma lógica assim, o acumulador começa sendo o primeiro elemento de idade, se esse acumulador for maior que o valor que é o próximo
//elemento, o acumulador vai continuar sendo o primeiro elemento, e ele vai seguindo assim até achar algum valor maior que o acumulador, depois disso
// caso o valor seja maior que o acumulador, o valor vai virar o novo acumulador, e depois que acaba os valores ele retorna o valor que é o maior de todos

const maisVelha = pessoas.reduce(function(acumulador, valor) { // nesse caso sem passar em que número começa, o acumulador é o primeiro elemento
                                                               // e o valor é o segundo elemento
    if(acumulador.idade > valor.idade) return acumulador; // ele compara o primeiro acumulador com o segundo
    return valor; 
});

console.log(maisVelha);