//Funções recursivas

// São funções que se chamam sozinhas e elas tem um limite que pode se chamar de volta

function recursiva(max) {
    console.log(max); // chamamos o console.log aqui, pois ela não vai mostrar na tela o primeiro numero porque nós adicionamos em baixo mais 1 no loop
    if(max >= 10) 
    return; // se o max for maior que 10 ela para aqui
    max++; // adiciona um a cada volta
    recursiva(max); // ela executa o código dela e se chama de volta a função a cada repetição, é como se fosse um for ou while
}

recursiva(0);