// Factory functions + Prototypes

// function criaPessoa(nome, sobrenome) {

//     //Para criar um prototype dentro de uma função factory
//     // const pessoaPrototype = {
//     //     falar() {
//     //         console.log(`${this.nome} está falando`)
//     //     },
//     //     comer() {
//     //         console.log(`${this.nome} está comendo`)
//     //     },
//     //     beber() {
//     //         console.log(`${this.nome} está bebendo`)
//     //     }
//     // }

//     // criamos um objeto vazio e passamos nosso prototype para referencia-lo
//     return Object.create(pessoaPrototype, {
    
//         //dentro do nosso objeto, podemos passar as propriedades deles também, enumerable, writable...
//         nome: { value: nome},
//         sobrenome: { value: sobrenome}
//     });
// }

//const p1 = criaPessoa('Erick', 'Bonfati');

// Agora vamos desacoplar nosso código

const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`)
    }
};

// const pessoaPrototype = { ...falar, ...comer, ...beber }; // com spread operator
const pessoaPrototype = Object.assign({}, falar, comer, beber); // estamos passando para um objeto vazio nossas constantes com os métodos

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome},
        sobrenome: { value: sobrenome}
    });
}

const p1 = criaPessoa('Erick', 'Bonfati');
const p2 = criaPessoa('Maria', 'Bonfati');

p2.falar();



