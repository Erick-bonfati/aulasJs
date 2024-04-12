const elementos = [
    { tag: 'p', texto: 'Frase 1' }, // 0
    { tag: 'div', texto: 'Frase 2' }, // 1
    { tag: 'section', texto: 'Frase 3' }, // 2
    { tag: 'footer', texto: 'Frase 4' } // 3
];


//Seleciona um elemento do HTML, nesse caso a classe '.container'
const container = document.querySelector('.container');

//Cria um elemento que contem todos os nossos outros elementos no HTML
const div = document.createElement('div');


// Agora vamos fazer um for para percorrer o nosso elemento
for (let i = 0; i < elementos.length; i++) {
    //Agora vamos fazer nosso elemento ser desestruturado para aparecer separado

    let { tag, texto } = elementos[i]; // assim desestruturamos e separamos cada um

    //Agora vamos criar os elementos, a cada laço de repetição ele vai passar em um objeto
    let tagCriada = document.createElement(tag);

    tagCriada.innerHTML = texto; // fazermos com que dentro de cada tag coloque um texto de acordo com o indice e laço de repetição

    div.appendChild(tagCriada); // aqui adicionamos a variavel que criamos dentro da div

}

container.appendChild(div); // aqui adicionamos nosso elemento 'div' que criamos