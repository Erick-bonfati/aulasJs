// Assíncrono - Promises, Ajax, Fetch e Async/Await

// Promises - promesas, que faz exatamente isso


function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// // função que vai demorar um pouco para executar
// function esperaAi(msg, tempo, cb) {
//     setTimeout(() => { 
//         console.log(msg);
//         if(cb) cb();
//     }, tempo);
// }


// // Assim não sabemos quando essa ordem vai ser alterada pois estamos passando um tempo aleatorio para cada uma
// // esperaAi('Frase 1', rand(1, 3));
// // esperaAi('Frase 2', rand(1, 3));
// // esperaAi('Frase 3', rand(1, 3));

// //Nós queremos que por exemplo, a frase 2 só seja executada depois da frase 1 e a frase 3 somente depois da frase 2...
// // Nesse caso poderiamos usar uma função de callback

// esperaAi('Frase 1', rand(1, 3), function() {
//     esperaAi('Frase 2', rand(1, 3), function() {
//         esperaAi('Frase 3', rand(1, 3));
//     })
// });


// Mas podemos resumir tudo isso com promises

function esperaBaixo(msg, tempo) {

    // estamos chamando o construtor do promise
    // dentro de um arrowFunc estamos chamando dois parametros, que são funções que vão ser 
    // chamadas dependendo do que ocorrer aqui dentro, resolve: olha esse código executou com sucesso então resolve ele para mim
    // reject: deu um erro aqui no código, rejeita ele para mim
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject(new Error());
        setTimeout(() => {
            resolve(msg); // logo depois de executar com sucesso o código, no mesmo lugar que chamariamos o callback
                          // e podemos passar somente um parametro para o resolve
        }, tempo);
    });
}


esperaBaixo('Conexão com o BD', rand(1, 3))
    .then( resposta => { // then = usamos para chamar o resolve
        console.log(resposta); // aqui chamamos o parametro que já foi atribuido o valor que passamos
        return esperaBaixo('Buscando dados da BASE', rand(1, 3)); // estamos retornando mais um promise, e para pegar o valor dela usamos mais um then()
    })
    .then(resposta => { // passando o valor do segundo promise
        console.log(resposta);
        return esperaBaixo(2, rand(1, 3)); 
    })
    .then(resposta => { // passando o valor do quarto promise
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe os dados na tela');
    })
    .catch( error => {
        console.log('ERRO:', error);
    }); // catch = usamos para chamr o reject



console.log('Isso vai ser exibido antes de qualquer promise');

