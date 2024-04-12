//Atribuição via desustruturação (Arrays)

//... rest, ... spread = sempre pega o resto dos elementos

// let a = 'A' // B
// let b = 'B' // C
// let c = 'C' // A


// const letras = [b, c, a]; // estamos pegando os valores do array que criamos e colocando numa variavel modificavel
// [a, b, c] = letras; // aqui estamos passando os valores das variaveis e modificando para a variavel que criamos com o valor dos arrays

// console.log(a, b, c);

//                0     1     2     3     4     5     6     7     8  = INDICA O NUMERO DO INDICE DOS ARRAYS
//const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//const primeiroNumero = numeros[1];
//const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros; //usar "..." pega o resto das coisas que não utilizamos

//const [um, , tres, , cinco, , sete] = numeros; // pula um indice utilizando um espaco vazio

//console.log(um, tres, cinco, sete)


// console.log(primeiroNumero, segundoNumero, terceiroNumero, resto)


//                    0          1          2     =  Aqui os indices são indicados pela quantidade de arrays
//                 0  1  2    0  1  2    0  1  2  = E aqui o numero dos indices dentro do array
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];

// para acessar um indice dentro de varios arrays
console.log(numeros[1][2]) // primeiro escolhemos qual array queremos e depois o numero do indice desejado

// usando desustruturação para selecionar somente o numero 6

const [,[,,seis]] = numeros; // dentro de colchetes usamos virgula para pular o primeiro array, depois abrimos mais um array e usamos duas virgulas
// para pular os dois primeiros indices, e só depois nomeamos o indice que desejamos

console.log(seis);

// O mais fácil para se fazer neste caso é declarar as listas primeiro, desta forma:

const [lista1, lista2, lista3] = numeros;

console.log(lista3[2])


