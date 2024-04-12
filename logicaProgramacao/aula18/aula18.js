/*
Operadores lógicos

&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true

|| -> OR -> OU

! -> NOT -> NÃO


*/

const usuario = 'Erick'  //form que o usuário digitou
const senha = '123456'  //for que o usuário digitou

const vaiLogar = usuario === 'Erick' && senha === '123456';
console.log(vaiLogar);

console.log(!false)
console.log(!!false)