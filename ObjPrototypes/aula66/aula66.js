// Manipulando Prototypes

// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
   //_proto_ = Object.prototype
};

const objB = {
    chaveB: 'B'
   //_proto_ = objA
};

const objC = {
    chaveC: 'C'
   //_proto_ = objB
};


// Setar o prototype de...
Object.setPrototypeOf(objB, objA); // Nesse caso mesmo não tenho a chave a no objeto B, nós podemos acessar ela pelo B
Object.setPrototypeOf(objC, objB); // passa pelo b, passa pelo a e chega no object.prototype
console.log(objB.chaveA);


// Agora vamos usar com nossos objetos e funções

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Criamos um método dentro do prototype
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100)) // aqui é como vamos fazer o calculo da porcentagem
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
};

const p1 = new Produto('Camiseta', 50);

// p1.desconto(100); // Neste caso vai ser 100% de desconto

p1.aumento(100); // Aqui vai dar 100% de aumento

console.log(p1);

//Objecto literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype); // Primeiro passamos quem vai receber o prototype e depois de onde vai pegar o prototype

p2.aumento(100); // aqui é a porcentagem do aumento, neste caso é 100%

console.log(p2);


// Criar um objeto e ja setar o prototype dele de cara

// const p3 = Object.create(Produto.prototype); // vai criar um objeto pegando o prototype de produto, o objeto vai aparecer vazio
// p3.preco = 130; // cria uma chave com um preço
// p3.aumento(10); // 10% de aumento
// console.log(p3);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 450
    }
});

p3.aumento(10);

console.log(p3)