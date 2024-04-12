//Não podemos criar constantes com palavras reservadas, ex: if, else, let...

//Constantes precisam ter nomes significativos

//Não pode começar o nome de uma constante com numeros

//Não podem conter espaços ou traços

//Utilizamos camelCase

//Case-sensitive

// Não podemos modificar o valor de uma constante

// Não utilize VAR, utilize CONST.

const nome = 'Joao';

console.log(nome);

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado)
console.log(resultadoDuplicado)
console.log(resultadoTriplicado)

// + - *

// typeof = vê o tipo de dado 

// juntar numero com string faz com que o terminal concatene os valores, por ex: "5" + 10 = 510

console.log( typeof(primeiroNumero) )

console.log(primeiroNumero + segundoNumero)



const nomes = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 90;
const alturaEmM = 1.80; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
 
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;
 
// template strings
 
console.log(`${nomes} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nomes} nasceu em ${anoNascimento}.`);