// Objeto date

// Para usar o objeto date, temos que usar 'NEW' junto

// Date é uma função construtora, toda função construtora começa com a primeira letra maiuscula

// const data = new Date(); // aqui nos estamos falando que isso é uma nova data


// const tresHoras = 60 * 60 * 3 * 1000; // 60 é para uma hora, '3' é para vezes que representa quantas horas
// // e '1000' é para milésimos, estamos adicionando 3 horas no date
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix, o ZERO é considerado uma data zero do primeiro dia da época unix
// console.log(data.toString());

//const data = new Date(); // estamos criando uma hora a partir do momento em que rodar o código
//console.log(data.toString());

// const data = new Date(2019, 3, 20, 15, 14, 27, 500); //Na sequencia fica, ANO, MÊS, DIA, HORAS, MINUTOS, SEGUNDOS E MILÉSSIMOS(NÃO APARECE AQUI)
// console.log(data.toString());

// const data = new Date('2019-04-20 20:20:59.100'); //Colocando uma data utilizando uma string
// console.log(data.toString());

// Aqui vamos separar por cada tópico
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); //Mês começa do zero, por isso pedimos para adicionar mais 1 na conta
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia Semana', data.getDay()); //Dia 0 - Domingo, 6 - Sábado
// console.log(data.toString());


// const dateMs = new Date(1698151769504)
// console.log(data.toString());

//console.log(Date.now()); // transforma a data em miléssimos de segundos

// Criar uma função que formata uma data

function formataData (data) {
    //console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); // aqui precisamos corrigir porque nosso mês começa no 1 é não no ZERO
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`; //retornamos as datas separas agora juntas e formatadas
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

// Criar uma função para adicionar o zero a esquerda na formatação da data

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`; // se o numero for menor que 10 ele adiciona um zero antes do numero
}

