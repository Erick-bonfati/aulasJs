// Funções fábrica - Factory Function - são funções que retornam objetos
 
// Constructor function (Função construtora)

function criaPessoa (nome, sobrenome, peso, altura) {
    return {
        nome, 
        sobrenome, 

        // Criamos um Getter para pegar o nome completo
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`; // Isso só obtem o valor, precisamos referenciar o objeto com 'this'
        },

        // Setter
        set nomeCompleto(valor) { // criamos um parametro para sustentar esse método com setter
            valor = valor.split(' '); // Tranforme o parametro em um array e separa cada um por um espaço
            this.nome = valor.shift(); // pega o objeto nome com this e, com o 'shift' removemos o primeiro caractere
            this.sobrenome = valor.join(' '); // isso faz com que juntemos o sobrenome com a string 
        },

        // fala: function(assunto) { // quando uma função está dentro de um objeto nós chamamos ela de método
        //     return `Tenho ${this.peso} kilos e ${nome} ${sobrenome} está falando ${assunto}.`  // Usamos 'this' para buscar uma variavel que está fora do objeto
        //     // o 'this' - vai se referir ao método do valor do objeto inteiro, e oque está referenciando esse objeto é a const 'p1' que criamos
        // },

        peso: peso,
        altura: altura,

        // Getter - para só obter o valor
        get imc() { // método para pegar o IMC de uma pessoa, tranformamos nosso método em um atributo do objeto
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}


// P1

//const p1 = criaPessoa('Erick', 'Bonfati', 90, 1.80);

// console.log(p1.nomeCompleto); // Nome completo com base do método getter

//p1.nomeCompleto = 'Ericka bonafati farias';

//console.log(p1.nome); // Exibe o nome que foi editado com setter

//console.log(p1.sobrenome); // o sobrenome após editado com setter

// console.log(p1.imc); // Da o imc da pessoa com base no método que criamos

// console.log(p1.fala('Falando sobre JS')); // passamos um argumento para a função dentro do nosso objeto


//P2

// const p2 = criaPessoa('Maria', 'Joaquinha', 60, 1.60);

// console.log(p2.imc);

// console.log(p2.fala('Falando sobre JS'));


const pp = criaPessoa('Erick', 'Bonfati', 90, 1.80);
const ppp = criaPessoa('junior', 'klaba', 80, 1.90);
const pppp = criaPessoa('luiz', 'safes', 50, 1.50);

console.log(pp.imc);