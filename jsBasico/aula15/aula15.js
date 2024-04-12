/*
Primitivos (imutaveis = não podem ser modificados) - string, number, boolean, undefined, null (bigint, symbol) - Valor copiados

Referência (mutável = é possivel modificar os valores) - Arrays, Object, Function - Quando falamos em apontar por referencia é porque existem um ou
ou mais valores com o mesmo valor na memoria
*/

//          0123  aqui pegamos a letra
let nome = 'Luiz'; // Entenda a variavel como se fosse somente uma caixa que tem o valor
nome[0] = 'R';  //Não consiguimos mudar o valor da string por ser um valor imutavel
console.log(nome[0], nome); // aqui pegamos o elemento que está no indice

let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); // Aqui ele substitui o novo valor de A, porém mantem o valor antigo de b, isso porque nosso tipo de dado é STR(string) imutavel

let c = [1, 2, 3];
let d = [...c]; // Assim fazemos uma cópia do array que está dentro de C neste caso o valor dele permanece o mesmo pois não aponta pro mesmo lugar
//                 na memoria
let e = d;
console.log(c, d) // ele guarda os valores C e D no mesmo lugar da memoria

c.push(4);
console.log(c, d);  //Aqui o valor do C e D são repetidos, isso pois apontam no mesmo lugar da memoria

d.pop();
console.log(c, d); // Aqui os dois voltam a ter os valores, 1, 2 e 3, pois estão no mesmo lugar da memoria

c.push('Erick');
console.log(e);

