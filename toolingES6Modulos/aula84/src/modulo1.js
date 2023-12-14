// Este módulo vive dentro do seu proprio mundinho, então nada do que fazemos aqui está disponivel para fora do arquivo, ou seja, eu não posso
// usar outros arquivos/módulos para importar as coisas deste arquivo aqui, para isso precisamos exportar as coisas aqui
const nome = 'Erick';
const sobrenome = 'Bonfati'
const idade = 19;

function soma(x, y) {
    return x +y;
}

// Uma das maneiras mais faceis de exportas as coisas é exportando o nomes dessas coisas


export { nome, sobrenome, idade as idade2, soma }; // assim estamos exportando desse módulo somente o que selecionamos, e também mudamos o nome da
// exportação da 'idade' para 'idade2'


//Podemos ja criar a variavel e exportar ela

export const cliente = 'Fernando';

export const sexo = 'masculino';

export const idadeCli = 28

export function nomeCompleto() {
    return cliente + sobrenome;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}