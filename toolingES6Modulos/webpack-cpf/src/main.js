import GeraCPF from './modules/GeraCPF'

import './assets/css/style.css'; // para importar os estilos css para o html

(function() { // função auto-executada
    
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf()
})()
