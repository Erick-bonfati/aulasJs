// .toString() converte algum numero para string

let num1 = 10.57000041204321; // number
let num2 = 2.5; // number

// console.log(num1.toString() + num2)

// num1 = num1.toString(); = converte direto para string

// console.log(num1.toString(2));

console.log(num1.toFixed(2)); // Pega somente duas casas decimais, ou a quantidade que você escolher...

console.log(Number.isInteger(num1)); // Verifica se o número é um inteiro ou não


let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // Retorna verdadeiro sempre que a conta for invalida

// Todo número tem uma leve pequena imprecisão, por isso usamos, 'parseFloat.Number(num1.toFixed(2)'

// somente para mostrar o número é, .toFixed('casas decimais')
