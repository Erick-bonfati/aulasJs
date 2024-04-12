// Async / await

// Vamos imaginar que precisamos de um código que vamos executando, por exemplo, da fase 1, fase 2, fase 3...
// e depois preciso utilizar estes dados em algum lugar

function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaBaixo(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no erro'); // passamos o erro dentro do timeout para não executar logo de cara
                return;
            }

            resolve(msg.toUpperCase() + ' - passei na promise');
        }, tempo);
    });
}

//Usando then nos podemos ir encadeando cada promise, gerando fase por fase
// Aqui estamos usando essa função como se fosse algo assincrono, executa fase por fase
// esperaBaixo('Fase 1', rand()) // capturando primeiro promise
// .then(valor => {
//     console.log(valor); // exibindo primeiro promise
//     return esperaBaixo('Fase 2', rand()); // capturando segundo promise
// })
// .then( fase => {
//     console.log(fase); // exibindo segundo promise
//     return esperaBaixo('Fase 3', rand()); // capturando terceiro promise
// })
// .then( fase => {
//     console.log(fase) // exibindo terceiro promise
//     return fase; // capturando quarto promise que na verdade é o terceiro
// })
// .then(fase => {
//     console.log('Terminamos na fase:', fase) // exibindo quarto promise
// })
// .catch(e => console.log('ERRO:', e));

// Mesmo não usando mais callbacks ainda está bem verboso, para resumir isso podemos usar async e await


// Usando async, primeiro passamos que é uma função e depois o nome da função, o await vai ser o que vai denominar o resolve ou reject..
async function executa() {

    // jogamos tudo dentro de um try, catch para capturar os erros
    try {
        const fase1 = await esperaBaixo('Fase 1', rand()); // a cada await minha função vai pausar e salvar o promise que criamos
        console.log(fase1); // exibe o promise

        const fase2 = await esperaBaixo('Fase 2', rand());
        console.log(fase2);

        // const faseErro = await esperaBaixo(0, rand()); // rejeita o promise e gera um erro, pois não é uma string
        // console.log(faseErro);

        const fase3 = esperaBaixo('Fase 3', 1000); // Esse promise fica em PENDENTE, pois ele não está chamando o valor do banco de dados
        console.log(fase3);

        setTimeout(function() {
            console.log('Essa promise estava pendente:', fase3)
        }, 1100);


        console.log('Terminamos na fase:', fase3);
    } catch(e) {
        console.log(e);
    }
   
}

executa();

// Em resumo: async vai permitir que você utilize a palavra 'await' dentro de uma função para esperar uma promise ser finalizada

// As promises tem 3 estados: 

//PENDING -> PENDENTES

// FULLFILLED -> RESOLVIDA

// REJECTED -> REJEITADA

//Criando uma promise pendente

const testPending = esperaBaixo('qlq', 5000);
console.log(testPending)
