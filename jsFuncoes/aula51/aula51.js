// Funções geradores - funções geradoras tem um recurso especial que faz com que quase pause um código em determinado local

function* geradora1() { // criamos uma função 
    // Código qualquer...
    yield 'Valor 1';
     // Código qualquer...
    yield 'Valor 2';
      // Código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1();

//console.log(g1.next()); // é um método dentro de uma função geradora como um objeto, usamos next para pegar os próximos valores
// aqui ele retorna dois valores, primeiro é o value: 'o primeiro valor que passou', e done: false => ele fala se já terminou o valor ou não, neste
// caso não, pois ainda estamos no primeiro valor, e nós temos 3 valores

console.log(g1.next().value); // aqui ele começa rodando somente o valor do primeiro 'yield', é quase como se fosse um pause
console.log(g1.next().value); // segundo yield
console.log(g1.next().value); // terceiro yield

for(let valor of g1) { // o for sabe exatamente quantas repetições esse valor tem, então ele vai fazer as repetições até o último valor
    console.log(valor);
}


// função com gerador que para cada vez que eu chame essa geradora ele me entregue um valor somente
function* geradora2() {
    let i = 0

    while (true) { // adicionar um indice a cada next
        yield i;
        i++;
    }
}

const g2 = geradora2(); 

//  Esse gerador não tem fim, pois começa do 0 e não tem um limite de onde parar
console.log(g2.next().value); // 0
console.log(g2.next().value); // 1
console.log(g2.next().value); // 2
console.log(g2.next().value); // 3
console.log(g2.next().value); // 4
console.log(g2.next().value); // 5...


// Gerador que delega tarefa para outro gerador

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {

    //0, 1, 2 está sendo feito por este gerador
    yield* geradora3(); // aqui delegamos para a geradora 4 gerar os yields da geradora 3
    
    // o restante está sendo feito dentro dessa geradora4
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for (let valor of g4) {
    console.log(valor);
}


// com strings

function* geradora5() {
    yield function() { // criamos uma funcão dentro do yield
        console.log('Vim do y1')
    };

    // return function() { // a partir daqui o restante não vai ser executado, ele para tudo abaixo quando vê o return.
    console.log('Vim do return')
    // }

    yield function() {
        console.log('Vim do y2')
    };
}

const g5 = geradora5();

const func1 = g5.next().value; // passamos o primeiro valor do yield que usamos junto da função
const func2 = g5.next().value; // e aqui passamos o segundo yield

func1();
func2();

