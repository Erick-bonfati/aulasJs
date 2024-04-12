// Funções construtores (constructor fuctions)

// Tanto as funções factory quanto as funções construtoras criam objetos

// A unica diferença entre as duas é que a função factory a gente faz ela retornar um objeto voluntariamente é uma função que a gente pede para
//retornar um objeto

// Já a Função construtora ela já cria, retorna o objeto, unica coisa que fazemos é criar ela

// Construtora -> Sempre começa o nome com letra maiscula e sempre é obrigátorio usar a palavra (new), ex: Pessoa (new)

function Pessoa(nome, sobrenome) {

    //Atributos ou métodos privados
    //Variaveis privados = pois não estão disponiveis fora do corpo da função, salvamos por exemplo o ID de uma pessoa que não pode ser 
    // referenciado por fora, ele só permanece na função 
    const ID = 123456;
    const metodoInterno = function() {

    };

    //Atributos ou métodos públicos
    this.nome = nome; // aqui ja referenciamos direto, pois o JS entende que estamos puxando o valor do parametro e passando num objeto
    this.sobrenome = sobrenome;

    // Usando um método com this

    this.metodo = function() { // criamos um método e passamos uma função para referenciar esse método
        console.log(this.nome + ': sou um método');
    }
}


const p1 = new Pessoa('Luiz', 'Otavio'); // a palavra 'new' cria um novo objeto vazio, faz o 'this' apontar para este objeto vazio e retorna
                                         // esse objeto para esta variavel
const p2 = new Pessoa('Maria', 'Oliveira');

p2.metodo();
