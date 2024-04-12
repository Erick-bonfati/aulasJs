// Métodos de instância e estáticos

//Métodos estáticos - são métodos que você pode instanciar na classe sem usar a palavra (new)

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

   
    //Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Ok, vou trocar');
    }

    static soma(x, y) {
        return x + y;
    }
}

//Instanciar a classe é criar um novo objeto aqui
const controle1 = new ControleRemoto('LG');

// Aqui estamos chamando a instancia que é o 'controle1' e o nome do método que é o 'aumentarVolume'
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);

// No exemplo acima nós criamos nosso construtor e depois fomos modificando ele

// Os métodos estáticos são métodos que estão referentes apenas a classe e não a instância da classe

// chamando o método direto da classe, sem chamar instância
ControleRemoto.trocaPilha();

console.log(ControleRemoto.soma(2, 4));

// Os métodos estáticos não tem acesso ao métodos de instância...