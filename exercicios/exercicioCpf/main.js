// 705.484.450-52 070.987.720-03

/*

Primeiro pegando os nove primeiros digitos: 705484450, depois multiplicamos por cada sequencia, começando por 10 até 2

705484450
7x 0x 5x 4x 8x 4x 4x 5x 0x

10 9  8  7  6  5  4  3  2 

70 0  40 28 48 20 16 15 0 = 237

Ai fazemos a conta assim: 11 - (237 % 11) = 5 (Primeiro digito) - Esse vai ser o resultado do primeiro digito

Se o digito que sair desta conta for maior que '9' a gente considera ele como zero


Depois fazemos a conta novamente, mas agora adicionando o primeiro digito, e começamos a multiplicação pelo '11'


7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

Fazemos a conta: 11 - (284 % 11) = 2 (Segundo digito) - Esse vai ser o segundo digito

Se o digito 2 for maior que '9' o digito vai ser igual a '0'

Depois de fazer toda a conta, nós vamos concatenar os nove digitos que a pegou com o digitos que a gente gerou

Após isso vamos fazer a comparação se o cpf que a gente validou for igual ao cpf original esse cpf é valido

705.484.450-52 === 705.484.450-52 (VÁLIDO)

*/


//                                             705.484.450.-52
// Deste conta sai o primeiro digito = 705484450   | Desta o segundo digito = 52


// Cpf precisa ser uma string

let cpfInteiro = '705.484.450-52';
let cpfCortado = cpfInteiro.slice(0, -2);
let cpfLimpo = cpfCortado.replace(/\D+/g, ''); // esse é um método que tira tudo que não for um número vai ser substituido por... (nada)

// Converter a string num array de números
let cpfArray = Array.from(cpfLimpo).map(Number);

let multiplicador = 10;
let resultados = [];

// Cálculo dos resultados multiplicados
for (let i = 0; i < cpfArray.length; i++) {
    let resultado = cpfArray[i] * (multiplicador - i);
    resultados.push(resultado);
}

// Cálculo do dígito verificador
let soma = resultados.reduce((ac, val) => ac + val, 0); // aqui pegamos o valor de cada array do cpf mais o acumulador

let digitoVerificador1 = (11 - (soma % 11)) % 11;

if (digitoVerificador1 > 9) {
    digitoVerificador1 = 0;
}

const cpfdigito1 = cpfLimpo + digitoVerificador1;


// Pegar o digito 2


let cpfArray2 = Array.from(cpfdigito1).map(Number);

let multiplicador2 = 11;
let resultados2 = [];

// Cálculo de cada array do cpf
for (let i = 0; i < cpfArray2.length; i++) {
    let resultado2 = cpfArray2[i] * (multiplicador2 - i);
    resultados2.push(resultado2);
}

// Soma dos valores
let soma2 = resultados2.reduce((ac, val) => ac + val, 0);

let digitoVerificador2 = (11 - (soma2 % 11)) % 11;

if (digitoVerificador2 > 9) {
    digitoVerificador2 = 0;
}

const cpfdigito2 = cpfdigito1 + digitoVerificador2;

const cpfGeradoFormatado = `${cpfdigito2.slice(0, 3)}.${cpfdigito2.slice(3, 6)}.${cpfdigito2.slice(6, 9)}-${cpfdigito2.slice(9, 11)}`;

function resultadoFinal() {
    if (cpfInteiro === cpfGeradoFormatado) {
        console.log(`O CPF: ${cpfGeradoFormatado} é válido :`, true);
    } else {
        console.log(`O CPF: ${cpfGeradoFormatado} não é válido :`, false);
    }
}

resultadoFinal();