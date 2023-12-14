// Closures - muito relacionado com o escopo léxico(local)

function retornaFuncao(nome) {
    // Closure é a habilidade dessa funcão em acessar o escopo léxico 
    return function () { // Essa função tem acesso a três escopos, sendo o dela mesma, o do pai dela que é o 'retornaFuncao' e o global
        return nome; // em resumo ela está mudando o valor desta variavel nome
    }
}

const funcao = retornaFuncao('Luiz'); // aqui já sabemos que essa variavel vai receber a função anonima da função 'retornaFuncao'
const funcao2 = retornaFuncao('Joao'); // estamos fechando o escopo léxico e passando para o parametro 'nome' que depois é alterada pelo closure da outra funcão
console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2()); // executamos a função para ver os valores dela


// O que é função closure?
// Closure é um conceito da programação que se refere à habilidade de uma função se lembrar e acessar variáveis em um escopo externo, 
// mesmo que após a execução dessa função ter sido finalizada.
