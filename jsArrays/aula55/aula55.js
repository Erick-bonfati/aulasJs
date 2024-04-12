// Concatenando arrays

//Array utiliza colchetes [] e objeto utiliza chaves {}

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6]; 
// const a3 = a1.concat(a2, [7, 8, 9], 'Luiz'); // concatena o a1 com o a2, o array literal[7,8,9] e também uma string, e ainda continua sendo um array

// console.log(a3);

// Outra maneira é usando spread operator

// ...rest (...spread) = pegando o resto do arquivo e jogando para outro array

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, 'String', ...a2, ...[7, 8, 9]]; // espalhando os dois array na const a3 e uma string

console.log(a3);