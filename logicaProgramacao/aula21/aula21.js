// Operação ternária 

// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal'; // usamos a mesma condição que abaixo, porem aqui
// o '?' fosse 'if' e os dois ponto ':' fosse o 'else', a unica diferença é que aqui não jogamos o resultado na tela e sim numa variavel
console.log(nivelUsuario);

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuario VIP');
// } else {
//     console.log('Usuario Normal');
// }

