// Fetch API e Axios (JSON) - axios é quase um Fecth API ele também retorna promises e é mais simples

// Vamos usar o Fetch API para buscar os nossos arquivos JSON

// fetch('pessoas.json') // carregar o nosso arquivo json
//     .then(resposta => resposta.json()) // buscar as respostas do arquivo json
//     .then(json => carregaElementosNaPagina(json)); // recebe os dados json e joga para uma função


// // Função que carrega os elementos na página
// function carregaElementosNaPagina(json) {

//     const table = document.createElement('table');

//     for(let pessoa of json) { // para cada objeto dentro do arquivo json que é um array...
//         const tr = document.createElement('tr'); // cria uma linha na tabela

//         let td1 = document.createElement('td'); // no td vai o dado que eu quero, criamos um td para cada coluna
//         td1.innerHTML = pessoa.nome; // adiciona o json 'nome' no td
//         tr.appendChild(td1) // e fomos inserindo os tds dentro das linhas na tabela

//         let td2 = document.createElement('td');
//         td2.innerHTML = pessoa.idade;
//         tr.appendChild(td2)

//         let td3 = document.createElement('td');
//         td3.innerHTML = pessoa.salario;
//         tr.appendChild(td3)

//         table.appendChild(tr); // inserir as 'tr' linhas na table(tabela)
//     };

//     //inserir a tabela no container
//     const resultado = document.querySelector('.resultado');
//     resultado.appendChild(table);
// }

// E agora usando o AXIOS

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data)); // carregamos tudo no mesmo promise e passamos uma 'resposta.data' para capturar o json

function carregaElementosNaPagina(json) {

    const table = document.createElement('table');

    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr); // inserir as 'tr' linhas na table(tabela)

        //inserir a tabela no container
        const resultado = document.querySelector('.resultado');
        resultado.appendChild(table);
    };
}


