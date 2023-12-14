// FETCH API (GET) - é a mesma coisa que AJAX porém muito mais curto

// a fetch por padrão já retorna uma promise, não precisa criar ela
// fetch('pagina1.html') // passamos o caminho que queremos linkar
//     .then(resposta => { // essa resposta não vem com o dados prontos, você precisaria converter para dados
//         if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO');// se o código da resposta for diferente de 200, throw = criamos um novo erro
//         //erro para isso...
//         // Para pegar o texto que está dentro da página, fazemos assim...
//         return resposta.text(); // retornamos uma função 'text' que também retorna um promise, e para pegar esse valor de volta precisamos de outro then...
//     })
//     .then(html => console.log(html)) // chamamos uma promise com o html da página
//     .catch(e => console.error(e)); // console.warn = joga o erro na tela com o fundo amarelo, e se quiser um erro é 'console.error'


document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

// Convertendo para async, await

async function carregaPagina(el) {

    try {

    const href = el.getAttribute('href'); // pegando atributo href
    const response = await fetch(href); // carregando o link do href

    if(response.status !== 200) throw new Error('ERRO 404'); // tratando o erro de status

    const html = await response.text(); // convertendo os dados do response para valor
    carregaResultado(html); // carregando os resultados na tela

    } catch(e) {
        console.log(e);
    }
};

// aqui vamos selecionar nossa classe do html 'resultado' e jogar oque recebemos do response dentro do resultado
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}


// Ou podemos fazendo sem a forma assincrona

// function carregaPagina(el) {

//     const href = el.getAttribute('href');
    
//         fetch(href) // carregando o link
//         .then(response => { // pegamos o href que está sendo clicado e pegando outra promise para converter a resposta em texto
//             if(response.status !== 200) throw new Error('ERRO 404'); // se o status do response for diferente de 200 gera um erro
//             return response.text() 
//         }) 
//         .then(html => carregaResultado(html))// promise para pegar o html da função carregaResultado que está recebendo o HTML
//         .catch(e => console.log(e));
         
// };

// // aqui vamos selecionar nossa classe do html 'resultado' e jogar oque recebemos do response dentro do resultado
// function carregaResultado(response) {
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response;
// }