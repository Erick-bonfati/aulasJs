// Array - avançado => revisão do básico em arrays

//Array são valores por referencia

// Isso é um array literal
//                0          1         2
// const nomes = ['Erick', 'Bonfati', 'Farias'];

// nomes[2] = 'Joao';

// delete nomes[2];

// console.log(nomes);

// Podemos usar o construtor para criar um array também, a primeira letra vai ser Maiscula

//const nomes = new Array('Eduardo', 'Maria', 'Jose');

//Array são valores por referencia

// const ref = ['Erick', 'Bonfati', 'Farias', 'Rosana', 'Maria'];

// const novo = [...ref]; // fazemos uma cópia de nomes para dentro de novo

// const removido = novo.pop(); // remove o último item da lista e salvar ele numa variavel

// const começo = novo.shift(); // remove o primeiro item da lista

// ref.push('Joao'); // adiciona no final da lista

// ref.unshift('Wallace'); // Adiciona no começo da lista

// console.log(ref);
// console.log(novo);

// console.log(ref.length);

// console.log(ref, removido);

// const nomes = ['Erick', 'Bonfati', 'Farias', 'Rosana', 'Maria'];

// const novo = nomes.slice(1, 3); // o primeiro indice que vai pegar e o último, o último não conta então sempre coloque um a mais 

// const novo = nomes.slice(1, -1); // podemos usar o slice com números negativos também, neste caso removemos 'maria' o último indice e pulamos o primeiro indice '0'

// console.log(novo);

// Converter uma string num array

// const nome = 'Luiz otavio mirando'

// const nomes = nome.split(' '); // separamos a string como um array separando por um espaço

// console.log(nomes);

const nomes = ['Luiz', 'otavio', 'miranda'];

const nome = nomes.join(' '); // converte o array para string, ele une todos os valores, e o separador dele sendo o 'espaço'

console.log(nome);



