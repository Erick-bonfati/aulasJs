/*
Valores avaliados em falso no JS

*false
0
'' "" ``
null / undefined
NaN

*/

console.log('Luiz' && '' && 'Maria');

function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi()); // se a variavel for false, vai ser exibido o valor : FALSE, na tela, ou se for qualquer dos valores avaliados
// como falso, ele ainda vai retornar 'FALSE'

const vaiExecutarTrue = 'Erick';

console.log(vaiExecutarTrue && falaOi()); // aqui ele avalia a variavel que neste caso é verdadeira e exibir o valor a ser retornado na função

// Já o || = OR ele vai retornar verdadeiro a partir do momento em que uma variavel for verdadeira também

console.log(0 || false || null || 'Erick bonfati' || true);

// Sempre que todas forem avaliadas em falsos, a última que vai aparecer na tela

