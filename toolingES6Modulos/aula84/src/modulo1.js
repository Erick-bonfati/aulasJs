// Este módulo vive dentro do seu proprio mundinho, então nada do que fazemos aqui está disponivel para fora do arquivo, ou seja, eu não posso
// usar outros arquivos/módulos para importar as coisas deste arquivo aqui, para isso precisamos exportar as coisas aqui
const nome = 'Erick';
const sobrenome = 'Bonfati'
const idade = 19

// Uma das maneiras mais faceis de exportas as coisas é exportando o nomes dessas coisas

export { nome, sobrenome, idade as idade2}; // assim estamos exportando desse módulo somente o que selecionamos, e também mudamos o nome da
// exportação da 'idade' para 'idade2'


//Podemos ja criar a variavel e exportar ela

export const cliente = 'Fernando';

export const sexo = 'masculino';

export const idadeCli = 28

export function nomeCompleto() {
    return cliente + ' ' + sobrenome;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}


// Podemos tratar essa variavel abaixo como, variavel privada desse módulo, já que isso não toca de nenhuma maneira o escopo global
const cpf = '1231213131'; // repare que este cpf não vai ser exportado já que não estamos atribuindo um 'export' para ela, mesmo importando tudo
// deste módulo...


// Podemos ter um default por arquivo

// export default function soma(x, y) { // e assim podemos usar qualquer nome para tratar esta variavel e não preciso colocar isso dentro desse módulo
//     return x +y;
// }

//Para exportar uma constante

const novoDefault = 'Sou o default const'

const tipo = 'aleatorio'

//export {novoDefault as default, tipo}


// Função arrowFunc como padrão

//export default (x, y) => x * y;

const cliArrow = 'Maria'

const idadeArrow = 27

export { cliArrow, idadeArrow}


// Normalmente nós vamos fazer assim

export default class Pessoa2 { // exportamos uma chave default primeiro e depois chamamos as outras informações
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}


const nome3 = 'Geraldo'
const sobrenome3 = 'Antonho'

export { nome3, sobrenome3}