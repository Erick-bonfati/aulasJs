// Parametros das funções



// argumentos que sustenta todos or argumentos enviados

function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}

funcao(1,2,3,4,5,6,7);

//Quando declaramos uma variavel sem valor, o JS seta os valores das variaveis como 'undefined'

function semValor(a, b, c, d, e, f) { // Neste exemplo passamos somente o valor dos 3 primeiros parametros e resto ficou como undefined
    console.log(a, b, c, d, e, f);
}

semValor(1, 2, 3); //  <= argumentos são os valores que enviamos para os parametros

function conta1(a, b, c=5) { // caso não tenha nenhum argumento, podemos declarar direto no parametro
    b = b || 0; // caso o parametro 'b' não tiver nenhum argumento ele vai setar a outra condição que neste caso é '0'
    console.log(a + b + c); // caso algum desses não tiver nenhum argumento ele vai definir como 'NaN' por não conseguir realizar nenhuma conta
}

conta1(2);

function conta2(a, b = 2, c= 4) { // Neste caso o valor foi declarado tanto no parametro quanto nos argumentos, aqui ele prioriza os argumentos
    console.log(a + b + c);
}

conta2(2, undefined, 20); // neste caso, nós pulamos o valor de 'b' e ai sim o valor declarado direto no parametro vai funcionar
// conta2(2, 10);


//Usando funções com desestruturação

function funcao({nome, sobrenome, idade}) { // colocamos um objeto dentro da funcao para usar como parametro e separando por objeto
    console.log(nome,sobrenome,idade);
}

// let obj = {nome: 'Luiz', sobrenome: 'Otavio', idade: 30}; //podemos criar uma variavel para fazer um objeto e depois só passar nos argumentos da função
funcao({nome: 'Luiz', sobrenome: 'Otavio', idade: 30}) // adicionamos a informação para o objeto na função

// Função com array

function funcao1([valor1, valor2, valor3]) { // Mesma situação que com objetos mas utilizando arrays
    console.log(valor1,valor2,valor3);
}

funcao1(['Erick bonfati', 'Farias', 18])


// Função com um caso real, operador de matematica

function conta(operador, acumulador, ...numeros) { // A funcão recebe um operador, um acumulador que começa do '0' e o resto dos numeros para fazer a conta '...'
    
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero; // adiciona um numero ao acumulador a cada que laço que fizer e depois faz a conta
        if (operador === '-') acumulador -= numero; 
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);

}

conta('*', 1, 20, 30, 40, 50); // para fazer o operador de multiplicação devemos começar pelo 1 para fazer a primeira conta
conta('-', 200, 20, 30, 40, 50); // operador 'menos', acumulador '200' começa do 200, numeros para fazer a conta...


// Usando argumentos para pegar o resto dos valores dos parametros

const conta3 = (...args) => {
    console.log(args);
}

conta3('+', 1, 20, 30, 40, 50);