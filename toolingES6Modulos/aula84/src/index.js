
// Importamos do módulo 1 e renomeamos alguns
import { node } from 'webpack';
import {nome as nome2, sobrenome as sobrenome2, idade2, soma} from './modulo1';


const nome = 'João';

console.log(nome, sobrenome2, idade2)
console.log(soma(5,5)) // passando os parametros da função soma do módulo1

// Importando mais coisas do módulo 1

import { cliente, sexo, idadeCli, nomeCompleto, Pessoa} from './modulo1';

console.log(cliente, sexo, idadeCli);
console.log(nomeCompleto())
console.log(Pessoa('Erick', 'Bonfati'))