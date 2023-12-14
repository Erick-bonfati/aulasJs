// Prototypes - É a base que o JS usa para fazer heranças, para trabalhar como programação orientada ou objetos em si

/*
    Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

    Definição de protótipo
    Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

    Todos os objetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade 'prototype' da função construtora que foi
    usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio
    objeto e depois a cadeia de protótipos é usado até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)

// Esta função construtora serve só de molde para gerar os novos objetos
// Toda pessoa que eu criar dentro desta função construtora vai ter tudo que eu criar aqui dentro
// function Pessoa(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
// }

// instância 

// Isso são os novos objetos

//const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Função construtora 


//console.dir(pessoa1); // 'Pessoa' seria o membro, e dentro dele tem os objetos
//console.dir(pessoa2);


// Agora pense que para criar uma 'Pessoa' que recebe por exemplo um método, para cada pessoa que criarmos, vamos criar um método exatamente igual ao
// que ja tinhamos feito, isso pode ser um problema, pois vai ocupando espaço na memoria do servidor e do client do nosso cliente, deixando assim
// tudo mais lento, seria um desperdicio de recurso do computador do cliente


// Agora vamos imaginar que podemos criar somente um método que somente este método vai alimentar todos os objetos que criarmos


// Instancia
//const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora =  Instanciamos uma pessoa da nossa função
//const data = new Date(); // Date = é uma função construtora = Instanciamos uma data

//console.dir(pessoa1) // aqui vamos ter as informações que criamos normalmente
//console.dir(data) // aqui já não aparece absolutamente nada, ou seja: nós pegamos todas informações daqui a partir da propriedade que estão
// dentro do pai deste objeto, em resumo eles pegam um método, jogar ele para dentro do _proto_ e assim não estamos criando ele a todo momento
// o _proto_ fica dentro do pai do Objeto "date", e não temos atributos dentro do 'date' temos somente métodos

// Toda vez que criamos um Objeto com função construtora, o JS já linka com um prototype, que é um objeto, que por padrão vem vazio

//Ex:

//Todos que criarmos no prototype, os objetos dentro da nossa função construtora também vai receber essa atribuição
//Pessoa.prototype.estouAqui = 'JAJAJA' // Assim criamos um objeto dentro da função construtora que vai linkar com o proto utilizando somente o espaço
// do _proto_ = 'Pessoa.prototype'


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'Original' + this.nome + ' ' + this.sobrenome; // caso ja tenhamos um método com exatamente o mesmo nome que do
                                                                // prototype, o que já está dentro da função vai sobescrever o do prototype
}
// Assim passamos pela cadeias do prototype, que ele sempre vai buscar primeiro o método, objeto... que está dentro do pai, que seria a propria funcão
// caso não ache nada dentro do pai, ai sim ele busca no _proto_, que lá provavelmente vai estar seu método...
Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;


// Pessoa.prototype === pessoa1._proto_ // são a mesma coisa

// E a cadeia do prototype, vai seguir nessa ordem de qual vai executar primeiro, usando o caso acima:

// Pessoa --> Pessoa.prototype --> Object.prototype, e também podemos ir aumentando essa herança, por ex:

// humano --> pessoa --> advogado -- > cliente e vai seguindo...