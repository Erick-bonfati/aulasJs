// For of - Estrutura de repetição




//            01234....
const nomes = 'Erick bonfati';

for (let valor of nomes) { // ele retorna o valor em vez do indice
    console.log(valor);
}

console.log('#####')

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('#####')

for (let i in nomes) {
    console.log(nomes[i]);
} // os três funcionam do mesmo jeito, a unica diferença é a situação em que vai usar cada um


// Podemos pegar o valor com um objeto:

const pessoa = {
    nome: 'Erick',
    sobrenome: 'Bonfati'
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}


// Em resumo sobre 'FOR'

// FOR clássico - Geralmente com iteráveis (array ou strings)

// FOR IN - Retorna o índice ou chave (string, array, objetos)

// FOR of- Retorna o valor em si (iteráveis, arrays ou strings)