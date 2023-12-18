// Este módulo vai ficar responsável por gerar a senha com os caracteres aleatorios

// Importado nosso gerador de senha
import geraSenha from './geradores'

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    });
};

function gera() { // funcao para gerar as senha com base nas regras abaixo
    const senha = geraSenha( 
        qtdCaracteres.value,
        chkMaiusculas.checked, // checked = serve para mostrar se nosso input está ou não marcado
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return senha || 'Nada selecionado'; // nenhuma condição acima bater, execute a segunda opção 'Nada selecionado'
}