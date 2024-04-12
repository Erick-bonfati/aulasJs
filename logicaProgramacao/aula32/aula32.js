// BREAK e CONTINUE

// CONTINUE = Continua para a próxima iteração

// BREAK = Sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2 || numero === 5) {
        continue; // caso o valor bata nas condições o 'CONTINUE' passa para a execução e vai para a próxima
    } // aqui por exemplo, assim que ele encontra o numero '2' ele pula pra a próxima, 3,4,5...

    console.log(numero);
}

for (let numero of numeros) {

    if (numero === 2) {
        break; // aqui assim que vê o numero 2 ele quebra o código assim que cai na condição
    }

    console.log(numero);
}

// COM LET IN
for (let i in numeros) {

    let numero = numeros[i];

    if (numero === 2 || numero === 5) {
        continue;
    }

    console.log(numero);
}

for (let numero of numeros) {

    if (numero === 2) {
        break;
    }

    console.log(numero);
}

//COM LET classico
for (let i = 0; i < numeros.length; i++) {

    let numero = numeros[i];

    if (numero === 2 || numero === 5) {
        continue;
    }

    console.log(numero);
}

for (let numero of numeros) {

    if (numero === 2) {
        break;
    }

    console.log(numero);
}

//Com WHILE

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];


    if (numero === 2) {
        console.log('Pulei o numero 2');
        i++; // O 'i' é necessario para fazer com que adicione mais um valor caso caia na condição, isso para evitar laço infinito
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('numero 7 encontrado, saindo...');
        i++; // O 'i' é necessario para fazer com que adicione mais um valor caso caia na condição, isso para evitar laço infinito
        break;
    }

    i++; // aqui adicionamos no final pra fazer a adição dos valores até chegar na condição...
}
