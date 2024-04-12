// Object.defineProperty() e Object.defineProperties()

function Produto(nome, preco, estoque) {
    
    Object.defineProperties(this, {
        nome: { // criamos uma chave para poder definir as propriedades dentro de cada um dos parametros que recebem um objeto
            enumerable: true,
            value: estoque, 
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: estoque, 
            writable: true,
            configurable: true
        }
    })

    Object.defineProperty(this, 'estoque', { // definimos as propriedades do item que estamos nos referindo, usamos this no começo pois o objeto se
        // se encontra fora da função
        enumerable: true, // mostra a chave ou não
        value: estoque, // mostrar o valor da chave
        writable: true, //pode alterar o valor ou não
        configurable: false // configuravel ou não, se for true podemos reconfigurar esta variavel
    });

    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true,
    //     value: estoque,
    //     writable: true, 
    //     configurable: false 
    // });

}

const p1 = new Produto('Camiseta', 20, 3);

p1.estoque = 50000 // aqui o estoque não vai ser aplicado pois bloqueamos alteração com 'writable'

console.log(p1);

console.log(Object.keys(p1)); // aqui aparece um array com as chaves que estão inumeradas

for(let chave in p1) {
    console.log(chave);
}