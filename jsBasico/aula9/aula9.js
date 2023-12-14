let umaString = ' Um "texto" ';

//   "Um /"texto"/" = serve como uma barra de escape para utilizar duas aspas do mesmo estilo

// Cada caractere possui um indice: 0,1,2,3,4,5,6...

// console.log(umaString[4]) = para pegar um indice especifico do texto

console.log(umaString[3]);

// .charAt() = para pegar o elemento que fica em tal posição(indice)...

console.log(umaString.charAt(6));

// .concat = concatena uma string

console.log(umaString.concat(' ', 'em', ' um', ' lindo dia'));

console.log(umaString + ' em um lindo dia.');

// ${variavel} = chamamos de template string, joga a string dentro do texto sem precisar criar regras de mais ou menos

console.log(`${umaString} em um lindo dia.`); // Essa é a mais recomendavel 

// Para descobrir em qual indice aparece a palavra ou valor que você deseja, utilizamos: .indexOf()

console.log(umaString.indexOf('texto')); // A palavra 'texto' começa no indice '5' neste caso

console.log(umaString.indexOf('Um', 3)); // Pede para achar a palavra começando do indice indicado, ele pode voltar indices caso a palavra não seja
                                         // encontrada a frente, no caso acima o resultado foi '-1'.

console.log(umaString.search(/x/)); // Procura o indice com expressões regulares

console.log(umaString.replace('Um', 'Outra coisa')); // Substitui um valor por outro

console.log(umaString.replace(/r/g, '#'));  // Substitui todas as expressões regulares citadas por outra selecionada

// .length = para ver o tamanho da string

console.log(umaString.length)  // O número zero conta como numero, então se o resultado for 10, o indice 10 contaria como 9

console.log(umaString.slice(2, 6)); // Ele fatia somente os indices que você selecionou

// .slice(-5) = quando usamos indices negativos ele pega do final para o começo...

console.log(umaString.slice(-5, umaString.length - 1));  //Aqui ele pega os últimos 5 indices, e tira um indice dos últimos.

console.log(umaString.slice(-5, - 1));  // O mesmo de cima porem mais simplificado

// .split = divide a string por cada valor que você passar

console.log(umaString.split(' ')); // Aqui ele separou cada palavra por cada espaço

console.log(umaString.toUpperCase())  // Deixa tudo em maisculo

console.log(umaString.toLowerCase())  // Deixa tudo minusculo