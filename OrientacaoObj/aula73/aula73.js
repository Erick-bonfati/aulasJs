// Herança com classes


class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' desligado');
            return;
        }

        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');

// d1.ligar();
// d1.ligar();
// d1.desligar();

// console.log(d1);


// Vamos estender a classe de cima, vamos herdar a classe de cima com outra classe


// Cria uma nova classe e herda tudo da classe acima
class Smartphone extends DispositivoEletronico {
    // Agora vamos passar os parametros dessa classe que vai herdar da SUPERCLASSE ou Classe pai

    constructor(nome, cor, modelo) {
        // Este 'SUPER' é basicamente chamar o construtor da classe pai e executar ele aqui dentro
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.')
    }

    falaOi() {
        console.log('Oi');
    }
}

const s1 = new Smartphone('Samsung', 'preto', 'Galaxy S10')

console.log(s1);

const t1 = new Tablet('Ipad', true);

t1.ligar();

t1.falaOi();