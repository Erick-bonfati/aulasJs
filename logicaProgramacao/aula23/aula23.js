// Switch / Case
function getDiaSemanaTexto(diaSemana) {

    let diaSemanaTexto;

    switch (diaSemana) {

        case 0:   // aqui é como dizer, caso o (diaSemana for '0') faça isso
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto; //Substituimos o break por return
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default: // é como um else, o valor que vai retornar caso as condições sejam adversas
            diaSemanaTexto = 'Valor Inválido';
            return diaSemanaTexto;
    }
}

const data = new Date('1987-04-20 00:00:00');

const diaSemana = data.getDay();

const diaSemanaTexto = getDiaSemanaTexto(diaSemana); // criamos uma variavel para pegar o escopo da outra variavel dentro da nossa função



// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = '';
// }


// switch (diaSemana) {

//     case 0:   // aqui é como dizer, caso o (diaSemana for '0') faça isso
//         diaSemanaTexto = 'Domingo';
//         break; // pede para finalizar o código aqui mesmo que tenha mais adiante, somente se bater as condições acima
//     case 1:
//         diaSemanaTexto = 'Segunda';
//         break;
//     case 2:
//         diaSemanaTexto = 'Terça';
//         break;
//     case 3:
//         diaSemanaTexto = 'Quarta';
//         break;
//     case 4:
//         diaSemanaTexto = 'Quinta';
//         break;
//     case 5:
//         diaSemanaTexto = 'Sexta';
//         break;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         break;
//     default: // é como um else, o valor que vai retornar caso as condições sejam adversas
//         diaSemanaTexto = 'Valor Inválido';
//         break;
// }

console.log(diaSemana, diaSemanaTexto)