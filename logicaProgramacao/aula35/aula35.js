// // Escreva uma função que recee um número e retorne o seguinte: 

// // Número é divisivel por 3 = Fizz
// // Número é divisivel por 5 = Buzz
// // Número é divisivel por 3 e 5 = FizzBuzz
// // Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
// // Chegar se o número é realmente um número
// // Use a função com números de 0 a 100

// // Função para gerar um numero aleatório
// function random(min, max) {
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }


// // Função para ver se o numero é divisivel 

// function verificaNumeroDivisivel(numero) {

//     if (numero % 3 === 0 && numero % 5 === 0) {
//         return " FizzBuzz ";
//     } else if (numero % 3 === 0) {
//         return " Fizz "
//     } else if (numero % 5 === 0) {
//         return " Buzz "
//     } else {
//         return numero = ' Não divisivel ';
//     }
// }


// function verificaSeEhNumero(numeroAleatorio) {

//     if (!isNaN(numeroAleatorio) ) {
//         return "";
//     } else {
//         return numeroAleatorio;
//     }
    
// }

// for (let i = 0; i <= 100; i++) {
//     const numeroAleatorio = random(0, 100);
//     const resultadoFizzBuzz = verificaNumeroDivisivel(numeroAleatorio);
//     const resultadoEhNumero = verificaSeEhNumero(numeroAleatorio);

//     console.log(numeroAleatorio, resultadoFizzBuzz, resultadoEhNumero);
// }


//Método prof


function fizzBuzz (numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}