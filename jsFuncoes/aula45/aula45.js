// Funções imediatas - IIFE - Immediately invoked function expression
//Funções invocadas imediatamente

function qualquerCoisa() {
    console.log(12314511231);
}

qualquerCoisa(); // Essa função toca no escopo global

// Uma função com IIFE não vai ter nome, então não vai tocar no escopo global

(function() { // essa função é executada dentro de parenteses, então ela foge completamente do escopo global, tudo que está aqui dentro fica aqui
    const nome = 'erick'

    console.log(nome)
})(); // é uma função que é executada imediatamente, sem precisar colocar ela para fora do escopo global



// A unica diferença dessa função para uma função normal e estar entre parenteses

(function(idade, peso, altura) { // podemos criar parametros para esta função também

    const sobrenome = 'Bonfati';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Erick'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(18, 90, 1.80); // aqui ja invocamos a função e passamos os argumentos para o parametro

