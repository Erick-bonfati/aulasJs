//Vamos criar uma factory function para criar a calculadora

function criaCalculadora() {
    // toda factory function retorna um objeto
    return {
        //Criar os atributos da calculadora
        display: document.querySelector('.display'), // seleciona a tag display no atributo do objeto
        btnClear: document.querySelector('.btn-clear'),


        // Métodos para nossa calculadora

        //Método para iniciar a calculadora
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        //Realiza a conta quando apertamos ENTER
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) { // caso o evento clicado for igual a treze(13) que é o botão de enter, ele vai fazer isso...
                    this.realizaConta();
                }
            });
        },

        //captura o clique dos botões
        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', e => {// para criar um evento de click no nosso método, usamos uma arrowFunction pois ele não permite
                // alteração no 'this', ja uma função normal permite

                // aqui o 'this' passa a ser o document, pois o 'this' sempre vai ser quem está chamando a função

                const el = e.target; //Para capturar somente oque estamos clicando

                if (el.classList.contains('btn-num')) { // condição que para se o target que estamos clicando tiver a classe 'btn-num', faça isso...

                    // Chamamos um método dentro de outro método e usamos 'this' para referenciar uma chave dentro do objeto
                    this.btnParaDisplay(el.innerText); // o innerText do 'el' vai ser tudo que estiver dentro da classe que foi apontada 'btn-num'
                }

                if (el.classList.contains('btn-clear')) { // Condição... se o target clicado tiver a classe clear, retorna esse método puxado com this
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) { // Condição para apagar um target clicado do display
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus(); // manda o foco do clique para o display sempre que clicar em algum número, assim podemos usar o ENTER para calcular

            }); //bind(this) - nós pedimos para usar o this da nossa calculadora em vez do this que foi criado dentro do documento, não usamos neste
            // caso pois estamos usando uma arrowFunction que não permite alterações no this, então o this já é o que precisamos
        },

        btnParaDisplay(valor) { // Metodo para pegar o valor do display
            this.display.value += valor; // referenciando o atributo display que criamos no objeto, vamos utilizando .value por se tratar de numeros
            //e vamos concatenar o que tiver no display dele e mais o botão que foi clicado
        },

        clearDisplay() { // Metodo para limpar o que estiver no display
            this.display.value = ''; // assim limpamos o display quando clicamos no botão de limpar
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); // o valor do display é vai ser igual ao valor do display, cortando(slice)
            // o tamanho total do display(caracteres) menos um(-1)
        },

        realizaConta() {
            //Para fazer a conta vamos usar eval, que ele identifica uma string e tenta fazer contas com os valores passados
            // Mas isso é um método muito perigo de se usar pois ele pode trazer falhas de sistemas caso use numa situação real
            let conta = this.display.value;

            try {
                conta = eval(conta); //usamos eval para fazer a conta

                if (!conta) { // Se não tiver como realizar uma conta ele retorna isso
                    alert('Conta Inválida');
                    return;
                }

                this.display.value = String(conta); // caso não caia na condição de cima o valor que vai sair vai ser esse

            } catch (error) {
                alert('Conta Inválida');
                return;
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia(); // Chamamos o método do objeto que criamos na função