// Escopo léxico - conhece o local onde ela foi declarada, tudo que está declarado dentro dele e o que está nos vizinhos dela

// Se ele não encontrar a variavel na função ele vai buscar no pai dela, e ainda por dianta, até chegar no escopo global e procurar por lá
const nome = 'Luiz'

function falaNome() { // funcao pai
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otavio'; // nesse caso ele vai buscar o nome da variavel no escopo global, pois primeiro ela busca no pai da função se não achar lá
    // ele pula para a seguinte, que neste caso é o escopo global
    falaNome();
}

usaFalaNome(); 