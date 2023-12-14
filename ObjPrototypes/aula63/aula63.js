// defineProperty -> Getter e Setters

// Getter e setter é uma maneira que temos de proteger a minha propriedade


function Produto(nome, preco, estoque) {
    
   this.nome = nome;
   this.preco = preco;

   let estoquePrivado = estoque; // definimos um estoque privado para manipular sem alterar o original

    Object.defineProperty(this, 'estoque', { 
        enumerable: true, // mostra a chave ou não
        // value: estoque, // mostrar o valor da chave
        // writable: true, //pode alterar o valor ou não

        // Pegar um método para retornar o estoque, o objetivo do getter vai ser só pegar o valor e exibir ele
        get: function() {
            return estoquePrivado;
        },

        set: function(valor) {
            
            if(typeof valor !== 'number') { // se o valor(estoque), for diferente de numero, faça isso...
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor;
        },

        configurable: false // configuravel ou não, se for true podemos reconfigurar esta variavel
    });

}

const p1 = new Produto('Camiseta', 20, 3);

p1.estoque = 'O valor que eu quero'; // esse valor que está sendo passado como atributo vai ser o seter do método

console.log(p1.estoque);



