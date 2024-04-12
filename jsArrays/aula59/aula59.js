// Unindo Filter + Map + Reduce


// Retorne a soma do dobro de todos os pares

// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 7, 8, 11, 15, 22, 27];

// const numerosPares = numeros.filter(function(valor) {
//     return valor  % 2 === 0; // retorna os numeros pares
// }).map(function(valor) {
//     return valor * 2; // retorna o dobro dos numeros pares
// }).reduce(function(acumulador, valor) {
//     return acumulador += valor; // retorna a soma do dobro dos numeros pares
// });

//Reduzindo para arrowFunction

const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador += valor);


console.log(numerosPares);