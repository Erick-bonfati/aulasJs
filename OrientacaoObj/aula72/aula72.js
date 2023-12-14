// Getter e setter com classes


// Symbol = é usado para criar uma chave privada dentro do nosso objeto

const _velocidade = Symbol('velocidade'); // O symbol nunca vai ser igual a outro, e assim criamos a chave 'velocidade'
class Carro {
    constructor(nome) {
        this.nome = nome;
        //assim chamamos nossa chave com Symbol para dentro da classe
        this[_velocidade] = 0;
    }

    //SET = Para checar o valor que está vindo, ex: se está entre 0 e 100 ou se é um número...
    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;

        this[_velocidade] = valor;
    }

    //GET = Para retornar a chave velocidade
    get velocidade() {
        return this[_velocidade];
    }

    // metodo que para cada vez que chamarmos o método acelerar, ele vai adicionar um de velocidade para nosso carro
    acelerar() {
        // se a velocidade for maior ou igual a 100 ele não permite mais acelerar
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        // se a velocidade for menor ou igual a 0 ele não permite mais freiar
        if(this[_velocidade] <= 0 ) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

// faz uma condição para o carro acelerar até 200, mas como temos nosso limite de velocidade ele vai para em 100
for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 55;
c1.acelerar();
c1.acelerar();
console.log(c1.velocidade); // aqui exibimos nosso getter que criamos dentro da classe 

// Getter é acessar o valor da velocidade

// Setter é dar o valro para a velocidade


//

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    // o setter precisa receber um valor, pois é o valor que vem depois do sinal de igual
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');

// utilizando o getter
p1.nomeCompleto = 'Luiz Miranda Oliveira'

console.log(p1.nomeCompleto);

// separando por nome e sobrenome com o setter
console.log(p1.nome);
console.log(p1.sobrenome); 
