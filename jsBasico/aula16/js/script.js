//let nome = 'Erick'; // Essa variavel vai ser considerada como global, já que pode aparecer no navegador e não está sendo protegida por nada

// Então para sempre proteger nossas variaveis vamos utilizar funções


// function meuEscopo() {

//     // Precisamos não permitir que a pessoa fique enviando o formulário e cancelar nosso script

//     //sempre que for uma classe utilizamos o "." ponto. Para ID usamos "#"
//     const form = document.querySelector('.form'); // Esse elemento faz com que possamos selecionar qualquer tag, id ou classe do nosso HTML

//     const resultado = document.querySelector('.resultado');

//     const pessoas = [];


//     pessoas.push({
//         nome: nome.value,
//         sobrenome: sobrenome.value,
//         peso: peso.value,
//         altura: altura.value
//     });
//     // form.onsubmit = function(evento) {
//     //     evento.preventDefault(); // Aqui pedimos para o navegador prevenir o que normalmente acontece por padrão
//     //     alert(1)
//     //     console.log('Foi enviado')
//     // }; // aqui selecionamos qual evento queremos capturar


//     // Podemos fazer o mesmo que acima porem de uma maneira um pouco mais moderna

//     function recebeEventoForm(evento) {
//         evento.preventDefault(); // Prevenir evento padrão da página

//         const nome = form.querySelector('.nome'); // Criamos a variavel puxando tudo que está na classe "form" e depois selecionando pela tag "nome"
//         const sobrenome = form.querySelector('.sobrenome');
//         const peso = form.querySelector('.peso');
//         const altura = form.querySelector('.altura');

//         //console.log(nome.value, sobrenome, peso, altura) // Usamos ".value" sempre que queremos ver o valor que passaram no nosso input

//         console.log(pessoas);

//         resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
//     };

//     form.addEventListener('submit', recebeEventoForm); // Assim selecionamos o tipo que queremos capturar e o nome da função


// }

// meuEscopo();
// Dessa maneira protegemos nossa variavel de ser reutilizada novamente no escopo da página
// A unica coisa que não fica protegida neste caso seria o nome da função, mas o conteudo ainda fica salvo

/*

Tarefas: 

pegar os valores passados no nome,sobrenome... e criar um objeto dentro do array "pessoas"

E criar um console.log para ver os objetos que colocamos dentro do array

e adicionar o que foi adicionados no array "pessoas" na div do html como um paragrafo

e cada vez que o formulario for enviado você vai criar um paragrafo com nome,sobrenome...

*/


function meuEscopo() {
  const form = document.querySelector('.form');

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const form = evento.target;
    const resultado = document.querySelector('.resultado');

    const pessoas = []

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    })

    console.log(pessoas);

    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ` +
      `${peso.value} ${altura.value} </p>`;

  }

  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();