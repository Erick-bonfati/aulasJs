// Programação orientada a objetos - classes

// A Classe e funções construtoras são exatamente a mesma coisa, o que muda é só a forma de escrever


class Pessoa {
    // Para a classe ficar identica a uma função construtora, precisamos receber os parametros dela, ex: nome, sobrenome...
    // temos um método que é executado sempre que crio uma classe, ele pode existir ou não, mas se precisar parametros para sua classe usamos:
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }


    // Criando prototypes para criar métodos com classes
    falar() {
        console.log(`${this.nome} está falando`)
    }

    comer() {
        console.log(`${this.nome} está comendo`)
    }

    falar() {
        console.log(`${this.nome} está bebendo`)
    }
}

// Vamos instanciar uma Pessoa agora, instalar é criar um objeto a partir da classe, a classe é um molde

const p1 = new Pessoa('Erick', 'Bonfati');
// const p2 = new Pessoa('maria', 'cordeiro');
// const p3 = new Pessoa('joao', 'santos');
// const p4 = new Pessoa('fernando', 'almeida');

p1.comer();


// Com uma função construtora fariamos assim

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`)
}

const p2 = new Pessoa2('Erick', 'Bonfati');

p2.falar();