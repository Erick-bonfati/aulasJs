// Métodos úteis para promises


function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaBaixo(msg, tempo) {
    return new Promise((resolve, reject) => {
        

        setTimeout(() => {
            if(typeof msg !== 'string') { 
                reject('Cai no erro'); // passamos o erro dentro do timeout para não executar logo de cara
                return;
              }

            resolve(msg.toUpperCase() + ' - passei na promise');
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject


//Promise.all

const promises = [
    // 'Primeiro valor', se chamar race ele vai sempre executar o que não está no promise, pois é como se fosse uma promessa já resolvida
    esperaBaixo(1000, rand(1, 5)),
    esperaBaixo('Promise 1', rand(1, 5)),
    esperaBaixo('Promise 2', rand(1, 5)),
    esperaBaixo('Promise 3', rand(1, 5)),   
    //'Outro valor' aqui a mesma coisa
]

//Usando o promise para o array

Promise.all(promises) // resolva todas minhas promises e retorna tudo dentro desse then...
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
});


//Promise.race - é como dizer, vou te passar essas promises e a primeira que resolver você me entrega o valor dela...
//E se ela encontrar qualquer erro ela vai te entregar somente o valor do erro

Promise.race(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
});  

// REPARE QUE QUANDO EXECUTAMOS AQUI A PRIMEIRA QUE EXECUTA É O RACE, POIS ELA EXECUTA A PRIMEIRA PROMISE QUE ELA RESOLVER
// JÁ O 'ALL' RESOLVE TODAS PRIMEIROS E RETORNA TUDO NUM 'THEN' SÓ


//Promises.resolve 

function baixaPagina() {
    const emCache = true;
    //cosnt emCache = false;

    if(emCache) {
        //return Promise.resolve('Página em cache'); // se a pagina estiver 'emCache' resolva
         return Promise.reject('Página em cache'); // se a pagina estiver 'emCache' rejeite
    } else {
        return esperaBaixo('Baixei a página', 3000); // caso contrario vai executar a função esperaBaixo
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina); // passa os valores do promise de 'baixaPagina'
    })
    .catch(e => console.log('ERRO:', e)); // passa o erro que no nosso caso seria o else que executa a função esperaBaixo