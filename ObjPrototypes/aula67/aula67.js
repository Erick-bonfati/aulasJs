// Herança

// Camiseta, caneca = o que os dois tem em comum é que são um produto

// Então nos dois eu quero ter: Produto -> aumento, desconto
// Cada um tem uma especificidade, a Camiseta = cor, a Caneca = material(plastico ou porcelana...)

// Vamos criar um função para criar um produto

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}


//Prototype para fazer um método de aumento e desconto
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // chamamos a função call, que linka as duas funções 
    this.cor = cor; // aqui criamos a propriedade somente da camiseta
}

//Antes de fazer a alteração era assim: Camiseta.prototype.constructor = Camiseta, que no caso é a funcão Camiseta, fazendo assim o construtor dela
// passa a ser a função de 'Produto' pois estamos linkando com ela, para resolver isso é só redeclarar a função prototype novamente
Camiseta.prototype = Object.create(Produto.prototype); // aqui nós fazemos que o prototype de 'Produto' seja adicionado ao prototype de 'Camiseta'
// isso sem alterar o valor do prototype de 'Produto'

Camiseta.prototype.constructor = Camiseta; // Redeclarando aqui o prototype volta a ser do construtor 'Camiseta'


//Redeclarando o aumento do produto para porcentagem %
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');

camiseta.aumento(10); // quantidade em, ex: r$

// console.log(produto);
// console.log(camiseta);

// Em resumo, 'Camiseta' herda tudo que tem de Produto, mas camiseta também pode ter suas coisas especificas


//Crie a herança desta função
function Caneca(nome, preco, material, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    Produto.call(this, nome, preco); // chamamos a função call, que linka as duas funções 
    this.material = material;
    // this.estoque = estoque;

    // Definindo as propriedades do estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function() {
            return estoque;
        },

        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

// Caneca.prototype.aumento = function(percentual) {
//     this.preco = this.preco + (this.preco * (percentual / 100));
// }

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca; 

const caneca = new Caneca('Caneca', 10, 'Porcelana', 27); // declaramos o objeto só depois de declarar o prototype

// caneca.aumento(100);
caneca.estoque = 100 // o valor do estoque da caneca passa a ser 100

console.log(produto);
console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque); // aqui estamos usando o getter 

//O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. 
//Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente). Por isso estamos usando esse 
//termo para descrever o comportamento desejado. Além disso, a maioria das literaturas, incluindo as documentações (como MDN) 
//citam a palavra herança.

//Vamos continuar usando o termo "Herança" até o final do curso, porém, J
//avascript não é uma linguagem que apresenta essa característica em específico, portanto não existe "herança" aqui.
// O que ocorre, na verdade, é "delegação". Esse seria o termo mais correto para descrever "Herança" em JS.