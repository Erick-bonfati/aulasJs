

// Validando o formulario

class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos(); // quando iniciar o formulário ele já executa esse método
    }

    eventos() {
            //adicionamos um evento de submit e passamos uma arrowfunction para impedir que o 'this' seja modificado, o this vai ser
            //a própria instância
            this.formulario.addEventListener('submit', e => {
                this.handleSubmit(e);
            })
    }

    //Faz com que por padrão ele não envie o formulário
    handleSubmit(e) {
        //previne evento padrão
        e.preventDefault();
        
        // checa se todos campos são válidos 
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidos();
        
        // se o campo e senhas forem validos faça isso...
        if(camposValidos && senhasValidas) {
            alert('Formulário enviado');
            this.formulario.submit();
        }
    }

    senhasSaoValidos() {
        let valid = true;

        // selecionando as tags
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        // se o valor da senha e o valor de repetirSenha for diferente faça isso...
        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.')
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.')
        }

        // quantida de caractere do usuario for menor que e maior que... a validação passa a ser false
        if(senha.value.length < 6 || senha.value.length  > 12) {
            valid = false;
            this.criaErro(senha, 'Senha de Usuario precisa ter entre 6 e 12 caracteres')
        }

        // retorna se é verdadeiro ou false
        return valid;
    }

    camposSaoValidos() {
        // isso é o que vai fazer se o formulário pode ou não ser enviado!
        let valid = true;

        //Para fazer o formulário gerar o erro somente uma vez na tela
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            //Para cada erro do formulario ele remove o erro que iria adicionar
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            
            // para pegar o elemento irmão anterior, e pegar o texto dentro desse elemento
            const label = campo.previousElementSibling.innerHTML;
            // se for uma string vazia vai validar como falsa
            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false; // mudamos o valid de true para false
            }

            // Se o campo tiver uma classe 'cpf' e for diferente de validaCPF, o valid passa a ser false
            if(campo.classList.contains('cpf')) {
                // passamos o campo como parametro
                if(!this.validaCPF(campo)) valid = false;
            }

            // valida se o campo usuario é valido, se for false a validação não vai dar continuidade...
            if(campo.classList.contains('usuario')) {
                // passamos o campo como parametro
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    // Faz a validação do usuario
    validaUsuario(campo) {

        //variavel para pegar o valor do campo
        const usuario = campo.value;

        // criar uma validação
        let valid = true;

        // quantida de caractere do usuario for menor que e maior que... a validação passa a ser false
        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Nome de Usuario precisa ter entre 3 e 12 caracteres')
            valid = false;
        }

        // Usando expressões regulares para o usuario só poder digitar tais caracteres...
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de Usuario precisa conter apenas letras e/ou números!');
            valid = false;
        }
        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.')
            return false;
        }
        return true;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div'); // cria uma div
        div.innerHTML = msg; // adiciona uma mensagem na div
        div.classList.add('error-text'); // adiciona um classe dentro da div
        campo.insertAdjacentElement('afterend', div); // método para pegar exatamente onde o erro ocorreu, vai ser depois do campo
    }
}

const valida = new ValidaFormulario();