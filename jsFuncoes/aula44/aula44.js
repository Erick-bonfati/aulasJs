// Funções em Callback -- são funções que são executadas quando uma ação acontece/finaliza


// No Javascript nós não temos como saber quanto tempo ele vai levar para ir na nossa base de dados, procurar e mostrar os dados que precisamos
// então vamos usar um tipo de timeOut para executar as funções abaixo:

// function f1() {

//     setTimeout(function() { // isso já é uma função de callback
//         console.log('f1');
//     }, 1000); // tempo para aplicar a função, 1000 = 1 segundos

// }

// function f2() {
//     setTimeout(function() { 
//         console.log('f2');
//     }, 3000);
// }

// function f3() {
//     setTimeout(function() {
//         console.log('f3');
//     }, 5000);
// }

// f1();
// f2();
// f3();

// console.log('Olá mundo!'); // Primeiro a ser executado, isso porque não tem nenhum Timeout para começar a executar ele

//Função para gerar um número aleatorio entre 1000 e 3000
function rand(min=1000, max=3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

// console.log(rand())


// funcões que geram na tela de forma aleatorio

//Callback é uma função que pode ou não ser recebida
function f4(callback) {
    setTimeout(function() { // isso já é uma função de callback, setTimeout = nós estamos simulando algo que demoraria na web
        console.log('f4');
        if(callback) callback(); // somente para verificar se callback existe
    }, rand()); // gera em ordem aleatoria por conta da função que gera um número aleatorio

}

function f5(callback) {
    setTimeout(function() { 
        console.log('f5');
        if(callback) callback();
    }, rand());
}

function f6(callback) {
    setTimeout(function() {
        console.log('f6');
        if(callback) callback();
    }, rand());
}

f4( function() {
    f5(function() { // aqui logo depois de gerar a função f4 ele vai gerar a função f5 usando callback
        f6(function(){ // aqui depois de gerar o f5 ele vai gerar o f6
            console.log('Olá mundo');
        }); // e aqui depois de gerar o todos as funções do callback nós usamos callback para exibir o 'Ola mundo'
    }); // 
});


// Para simplificar isso

f4(f4Callback); // chamamos o callback do f4

function f4Callback() { // executa o f4
    f5(f5Callback); // chamamos o callback do f5
}

function f5Callback() { // executa o f5
    f6(f6Callback); // chamamos o callback do f6
}

function f6Callback() { // executa o f6
    console.log('Ola mundo!'); // chama um console.log
}

