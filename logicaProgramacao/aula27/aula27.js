// Estrutura de repetição - FOR - Clássico

// console.log('Linha 0');
// console.log('Linha 0');
// console.log('Linha 0');
// console.log('Linha 0');
// console.log('Linha 0');

//for () {              } // essa é a estrutura que vamos utilizar para fazer um for


// para fazer um for precisamos de 3 passos, criar uma variavel de controle, uma condição e uma incrementação ou decrementação

// i = index
for ( let i = 0; i <= 5; i++ ) { // passamos o valor da variavel, colocamos uma condição e incrementamos o valor 'i' o for só para quando a condição
                                 // for falsa
    console.log(i); // o operador do js vai fazer como se fosse uma soma, primeiro começa com 1, depois mais 1, mais 1... até chegar na condição
}


for ( let i = -100; i <= 400; i += 10 ) { // aqui ele começa em negativo, até ficar positivo e tudo isso pulando de 10 em 10
    console.log(i);
}

for ( let i = 500; i >= 400; i -= 10 ) { // aqui o valor é 500 e ele pede para ir decrementando 10 até chegar a 400
    console.log(i);
}

for ( let i = 0; i <= 10; i++ ) {  // estamos verificando se o valor é par ou impar, vendo se o numero do index 'i' é divisivel por 2 e se for igual
    // a zero vai ser par
    const par = i % 2 === 0 ? 'par' : 'impar'; // criamos uma condição que caso o numero seja zero vai imprimir o valor par e caso contrário impar
    console.log(i, par);
}

//                0       1       2
const frutas = ['Maçã', 'Pêra', 'Uva', 'Erick', 'Luiz', 'Otavio'];

console.log(frutas.length) // conta quantos indices tem o array

for ( let i = 0; i < frutas.length; i++) { // aqui pegamos o tamanho do array, sempre com a condição '<'= menor, pois o length conta sempre um a mais
    console.log(`Índice ${i}`, frutas[i]); // exibimos o numero do indice juntamente do nome ou valor
}