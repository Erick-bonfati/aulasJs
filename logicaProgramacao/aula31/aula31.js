// While e Do While - Estrutura de repetição

let i = 0;

while (i <= 10) {
    console.log(i);
    i++; // serve para parar o laço de repetição, senão vai ficar seguindo infinitamente
}

// Função para gerar um numero aleatório
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}



const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand);

while(rand !== 10) { // Ele primeiro lê a condiçaõ e depois executa o código
    rand = random(min, max);
    console.log(rand);
}

console.log('#####')

do { // Ele primeiro executa o código e só depois ele lê e executa a condição, assim podemos trocar uma informação do código antes de executar
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);