// Criar uma calculadora com uma função construtora

function Calculadora() {
    this.display = document.querySelector('.display');

    // Método 'this' para capturar os cliques com o arrow
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    //Não está funcionando
    // this.capturaEnter = () => {
    //     this.display.addEventListener('keypress', e => {
    //         if (e.keyCode === 13) return;
    //         this.realizaConta();
    //     });
    // };

    this.capturaCliques = () => {
        document.addEventListener('click', event => { // capturamos o evento de click com arrow
            const elemento = event.target; // estamos nos referindo ao elemento que está sendo clicado, o target do evento

            // Condição, se na lista de classe do elemento clicado tiver a class 'btn-num' ele vai adiciona o método de 'addNumDisplay'
            if (elemento.classList.contains('btn-num')) this.addNumDisplay(elemento); // passamos o elemento que o parametro do método está recebendo
            if (elemento.classList.contains('btn-clear')) this.clear();
            if (elemento.classList.contains('btn-del')) this.del();
            if (elemento.classList.contains('btn-eq')) this.realizaConta();
        });
    };

     // método de adicionar um número no display e recebendo o parametro 'elemento'
    this.addNumDisplay = elemento => {
        this.display.value += elemento.innerText;
    //    this.display.focus();
    };
                                                 
    this.clear = () => this.display.value = ''; // limpando o display da calculadora

    this.del = () => this.display.value = this.display.value.slice(0, -1); // deletando somente um número do display

    this.realizaConta = () => {
        try {

            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta invalida');
                return;
            }

            this.display.value = conta;
            
        } catch(e) {
            alert('Conta invalida');
            return;
        };
    };
}

const calculadora = new Calculadora(); // é como pedir para o JS usar a minha função 'Calculadora' para criar um novo objeto calculadora

calculadora.inicia();

