// Mais diferenças entre VAR e LET/CONST

// Let tem escopo de bloco {.... bloco}
// Var só tem escopo de função

//rua
const verdadeira = true;

let nome = 'erick'; // criando
var nome2 = 'erick'; // criando

if (verdadeira) { //casa
    let nome = 'bonfati'; //criando
    var nome2 = 'rogerio' //Redeclarando
    //console.log(nome, nome2);

    if (verdadeira) { //quintal
        var nome2 = 'ronaldo'; //Redeclarando
        let nome = 'Outra coisa'; // criando
        console.log(nome, nome2);

        //O operador do javascript começa procurando pelo ultimo escopo dentro do bloco, se ele não encontrar ele vai para o próximo escopo
        // e caso não encontrar nada dentro do bloco ele vai para o escopo global e caso não ache no escopo global ai sim gera um erro
    }
}

console.log(nome, nome2);