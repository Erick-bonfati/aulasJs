//Método splice


//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice(atual), delete, elem1, elem2, elem3, elem4...) = primeiro passamos o array, depois '.splice', depois o indice que queremos começar,
//depois quantos elementos quero remover do meu array, e depois os elementos

console.log(nomes);

const removidos = nomes.splice(-2, Number.MAX_VALUE); // Ele começa do -2 e remove até o final do elemento 'MAX_VALUE' ele pega o maior valor de JS

console.log(removidos);

//Shift = remove o primeiro
//const removidos = nomes.splice(0, 1); // começando do zero remove um indice

//Push = remove o ultimo
//nomes.splice(nomes.length, 0, 'Luiz'); // fazemos a contagem da quantidade de indices do array e adicionamos um elemento no final, 
//nesse caso é melhor usar o push normal


//Unshift = adiciona no começo
nomes.splice(0, 0, 'Luiz', 'Gustavo', 'Ronaldo')

//const removidos = nomes.splice(-2, 1); // do indice menos -2 ele remove 1 indice que nesse caso vai ser o proprio indice -2, 
//essa função retorna também o indice deletado

const adicionados = nomes.splice(3, 0, 'Luiz', 'Gustavo'); // a partir do indice 3 ele vai adicionar esses elementos

console.log(nomes, adicionados, removidos); // Array:[ 'Maria', 'Joao', 'Eduardo', 'Julia' ] Adicionado:['Luiz', 'Gustavo'] Removido: [ 'Gabriel' 'Julia' ]