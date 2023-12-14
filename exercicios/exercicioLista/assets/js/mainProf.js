// Variaveis

// Variavel para o input de 'tarefas'
const inputTarefa = document.querySelector('.input-tarefa')

const btnTarefa = document.querySelector('.btn-tarefa')

const tarefas = document.querySelector('.tarefas')


// Funções


// Função para criar 'LI' no HTML
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// Função para limpar o input
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); //Pede para o JS fazer um focus, que é quando clicamos fora do evento ele fica piscando
}

// Função para criar um botão de apagar
function criaBotaoApagar(li) { // passamos o evento(li) pois é onde vamos criar esse botão no HTML
    li.innerText += ' '; // adiciona um li mais com um espaço em branco
    const botaoApagar = document.createElement('button'); // cria um elemento botão
    botaoApagar.innerText = 'Apagar' // Cria um inner de 'text' para 'Apagar' uma tarefa
    botaoApagar.setAttribute('class', 'apagar'); // para colocar uma classe no botaoApagar
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); // Quando passa com o mouse em cima, vai paagar este nome
    li.appendChild(botaoApagar); // Adiciona o botão apagar no 'li'
}

// Função para salvar as tarefas já criadas
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); // pega todos os 'li' dentro do input 'tarefas' e joga numa variavel
    const listaDeTarefas = []; // Array para colocar as tarefas

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // para substituir a classe 'apagar' para vazio || TRIM = 'Remove espaço das pontas'
        listaDeTarefas.push(tarefaTexto); // joga todo esse texto dentro do nosso array 'lista de tarefas'
    }

    //Agora vamos fazer isso virar um JSON = Json é um formato de texto que a gente utiliza para salvar dados entre sistemas

    const tarefasJSON = JSON.stringify(listaDeTarefas); //Transforma nossa lista de tarefas em JSON, é uma string que podemos pegar ela depois e
    //converter ela de volta num array
    localStorage.setItem('tarefas', tarefasJSON) // é local no navegador em que podemos salvar coisas, uma mini base de dados do navegador, 
    // Dentro do 'setItem' só escolhermos o nome que vamos recuperar depois de novo, e a variavel que está o JSON
}

//Função para ler as tarefas e jogar ele de volta na web
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); // pega o dados que salvamos anteriormente na mini base de dados do navegador
    const listaDeTarefas = JSON.parse(tarefas); // Converte a listadeTarefas de volta para um objeto javascript, que era um array antes
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa); // pegamos nossa função que cria tarefa e utilizamo junto do nosso json para salvar as tarefas
    }
    
}

adicionaTarefasSalvas();

//Função para criar uma Tarefa
function criaTarefa(textoInput) {
    const li = criaLi(); // captura a função 'li' que criamos
    li.innerText = textoInput; // cria uma 'li' do tipo 'text' dentro do html e captura o evento da função
    tarefas.appendChild(li); // adiciona o li na const 'tarefas' e no html com classe 'tarefas'
    limpaInput(); // usamos a função de limpar o input sempre que colocarmos alguma tarefa
    criaBotaoApagar(li); // adicionar um botão de apagar do lado da tarefa que criamos
    salvarTarefas();
}

//Eventos


//Cria uma função anonima para capturar o evento de click
btnTarefa.addEventListener('click', function() {

    if (!inputTarefa.value) return; // para impedir que quando clicar no botão e estiver vazio ele adicione uma tarefa
    // console.log(inputTarefa.value); // captura todo valor dentro do input, se usamos somente o console.log ele vai capturar tudo que estiver nele, mesmo em branco....
    criaTarefa(inputTarefa.value); // passamos a função de criar uma tarefa junto de capturar o click
})


//Captura o evento para quando apertarmos alguma tecla
inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) { // quando abrimos o console e apertamos 'ENTER' ele fala o numero do keyCode da tecla que pegamos
        if (!inputTarefa.value) return; 
        criaTarefa(inputTarefa.value);
    } 
}) // keypress = para quando somente clicamos em alguma tecla

// Para capturar o evento de click do botão e apagar o li, quando o botão for clicado

document.addEventListener('click', function(e) {
    const el = e.target; // variavel para capturar o target clicado

    if(el.classList.contains('apagar')) { // se no target clicado for igual a 'apagar' faça isso...
    el.parentElement.remove(); // exclui o 'pai' do target
    }
    salvarTarefas();
})