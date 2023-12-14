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
    inputTarefa.focus();
}

// Função para criar um botão de apagar
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar'); 
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar); 
}

// Função para salvar as tarefas já criadas
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = []; 

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); 
        listaDeTarefas.push(tarefaTexto); 
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); 
    localStorage.setItem('tarefas', tarefasJSON) 
    
}

//Função para ler as tarefas e jogar ele de volta na web
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); 
    const listaDeTarefas = JSON.parse(tarefas); 
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
    
}

adicionaTarefasSalvas();

//Função para criar uma Tarefa e exibir ela na tela
function criaTarefa(textoInput) {
    const li = criaLi(); 
    li.innerText = textoInput; 
    tarefas.appendChild(li); 
    limpaInput(); 
    criaBotaoApagar(li); 
    salvarTarefas();
}

//Eventos


//Cria uma função anonima para capturar o evento de click
btnTarefa.addEventListener('click', function() {

    if (!inputTarefa.value) return; 
    criaTarefa(inputTarefa.value); 
})


//Captura o evento para quando apertarmos alguma tecla
inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) { 
        if (!inputTarefa.value) return; 
        criaTarefa(inputTarefa.value);
    } 
}) 

// Para capturar o evento de click do botão e apagar o li, quando o botão for clicado

document.addEventListener('click', function(e) {
    const el = e.target; 

    if(el.classList.contains('apagar')) { 
    el.parentElement.remove(); 
    }
    salvarTarefas();
})