// XMLHttpRequest (GET) + Promises

// Ajax -  para procurar algum conteúdo na internet, buscar algum conteudo na internet e carregar
//Pode ser algum banckend de alguma api, entre outros...

//Carregar uma página dinamicamente, sem fazer um full reload da página, a gente recarrega somente certo conteúdo dentro de algum componente da pagina


// Para fazer uma requisição ajax - nós precisariamos de um link HTTP, precisariamos abrir um servidor local para conseguir fazer isso
// e para fazer isso vamos usar a extensão live server para criar um servidor localhost que cria um caminho de Http


// funcao XMLHttpRequest

// const request = obj => {
//     // Axr - representa ajax
//     const xhr =  new XMLHttpRequest();

//     //Sempre que você abre um site, você está fazendo uma requisição HTTP get() para determinado servidor
//     //Vamos usar um método get do HTTP
//     // xhr.open('GET', 'URL', true); // Primeiro mandamos o verbo que nesse caso é 'GET', depois a 'url' que vamos fornecer e por ultimo você manda se é sincrono ou assincrono
//     // Mas nesse caso vamos usar os parametros do objeto que estamos criando
//     xhr.open(obj.method, obj.url, true); // obj.method é como se fosse um form HTML
//     // Caso o xhr fosse um post nós iriamos mandar os dados deste post, mas nó nosso caso podemos preencher com null
//     xhr.send(null);

//     xhr.addEventListener('load', () => {
//         //Chegando o evento aqui dentro, quer dizer que nós já recebemos a resposta do servidor e vamos ter um código de resposta, se foi um código HTTP de sucesso

//         //Os código http tem do 100 ao 500, cada um faz algo diferente, mas 90% das vezes, o que estamos fazendo abaixo já supre nossas necessidades

//         // 200 = Sucesso, 300 = Redirecionamento
//         if(xhr.status >= 200 && xhr.status < 300) {
//             // atrelando uma função ao nosso objeto e dentro dele mandamos um xhr.responseText
//             obj.success(xhr.responseText); // aqui já vai vir o que a gente buscar de um documento HTML, um json, qualquer coisa... nós já mandamos para dentro da função de sucesso
//         } else {
//             obj.erro(xhr.statusText); // No nosso caso vamos só mandar a mensagem de erro

//             // obj.error({
//             //     code: xhr.status, // mandamos o código do erro
//             //     msg: xhr.statusText // e aqui a mensagem do erro
//             // })
//         }
//     });

//     //Feito isso nós já podemos fazer alguma requisição agora
// };

// // Acima já temos a função request, que vai buscar a páginas que linkamos no html

// // Agora vamos capturar os eventos de click e depois fazer carregar o elemento na página

// //Vai pegar os clicks em qualquer parte do documento
// document.addEventListener('click', e => {
//     const el = e.target; // capturar o target do elemento
//     const tag = el.tagName.toLowerCase(); // captura o nome da tag para minusculo

//     // se a tag clicada for igual a 'a', execute a função de carregar a página, que é outra função que vamos criar
//     if(tag === 'a') {
//         e.preventDefault(); // quando clicar no link ele não vai para o link
//        carregaPagina(el);
//     }
// })

// //Função para linkar as outras páginas e carrega-lás
// function carregaPagina(el) {
//     const href = el.getAttribute('href'); // Pega o link que está sendo clicado

//     // Agora vamos pegar o request que vai carregar a página vai ajax
//     request({ // dentro desse objeto precisamos mandar um objeto, que contem, method, url, status e os callbacks de success e error
//         method: 'GET',
//         url: href, // o url vai ser o href que pegamos do link

//         // e agora as funções de sucesso e erro
//         success(response) { // esse parametro response vai receber os links que vamos carregar
//             carregaResultado(response);
//         },

//         error(errorText) {
//             console.log(errorText);
//         }
//     });
// }

// // aqui vamos selecionar nossa classe do html 'resultado' e jogar oque recebemos do response dentro do resultado
// function carregaResultado(response) {
//     const resultado = document.querySelector('.resultado'); // seleciona a classe resultado
//     resultado.innerHTML = response; // adiciona o 'response' dentro da classe 'resultado'
// }


// AGORA VAMOS CONVERTER PARA PROMISES


const request = obj => {
    //criamos um promise dentro do objeto request
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(null);
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText); // trocamos o callback pelo promise
            } else {
                reject(xhr.statusText);
            }
        });
    })
};

//Vai pegar os clicks em qualquer parte do documento
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();


    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

//Função async para linkar as outras páginas e carrega-lás
async function carregaPagina(el) {

    const href = el.getAttribute('href');
    const objConfig = { // objeto para colocar dentro do request
        method: 'GET',
        url: href // o url vai ser o href que pegamos do link
    };

    // Usando try, catch para tratar os erros do objeto
    try {
        const response = await request(objConfig); // await para carregar a resposta de forma assincrona
        carregaResultado(response); // chama a função de carregar o Resultado
    } catch (e) { // tratar um erro
        console.log(e);
    }
};

// aqui vamos selecionar nossa classe do html 'resultado' e jogar oque recebemos do response dentro do resultado
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
