// Escreva uma função que recebe 2 números e retorne o maior deles

function pegarNumeroMaior(x, y) {

    if (x > y) {
        return x
    }
    return y;
}

console.log(pegarNumeroMaior(10, 2));



const max2 = (x, y) => x > y ? x : y;

console.log(max2(100, 200));
