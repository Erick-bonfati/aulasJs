
// Importamos do módulo 1 e renomeamos alguns
import {nome as nome2, sobrenome as sobrenome2, idade2, soma} from './modulo1';


const nome = 'João';

console.log(nome, nome2, sobrenome2, idade2)

// Importando mais coisas do módulo 1

import { cliente, sexo, idadeCli, nomeCompleto, Pessoa as OutraPessoa} from './modulo1'; // importando mais informações, e renomeando o nome da 
// função construtora

console.log(cliente, sexo, idadeCli);
console.log(nomeCompleto())

const p1 = new OutraPessoa('Erick', 'Bonfati') // atribuindo o valor da função construtora Pessoa

console.log(p1)


// Vamos exportar tudo que tem dentro do módulo 1

import * as tudoModulo from './modulo1' // Importa tudo do modulo 1 dentro de um objeto

console.log(tudoModulo);


// Importando o default do modulo 1

// import defaultPadrao from './modulo1' // e o default que importamos é uma função de soma, então passamos os parametros dela

// console.log(defaultPadrao(12, 4))

//import novoDefault from './modulo1';

//console.log(`Este é nosso default const: ${novoDefault}`)

import arrowDefaultMultiplica, {cliArrow, idadeArrow} from './modulo1' // importando o arrowFunc default e outros informações

//console.log(arrowDefaultMultiplica(10, 4), cliArrow, idadeArrow);


import Pessoa2Default, {nome3, sobrenome3} from './modulo1'

const p2 = new Pessoa2Default('Naldo', 'canal')

console.log(p2, nome3, sobrenome3);