// Este módulo vai ficar responsavel somente por gerar os caracteres


//Primeiro vamos gerar as letras aleatorios

// No JS temos esta função "fromCharCode" = que vai gerar letras e caracteres aleatórios, vamos usar isso como base para fazer nosso gerador

// Ex.: 
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(rand(65, 91)); // ao gerar o rand do numero sempre colocamos um numero a mais no final pois o js não
// considera o último numero

const geraMinuscula = () => String.fromCharCode(rand(97, 123));

const geraNumero = () => String.fromCharCode(rand(48, 58))

const simbolos = '.&%$#@!+-'

const geraSimbolo = () => simbolos[rand(0, simbolos.length)]; // pegamos um valor aleatorio da nossa const 'simbolos'

// Dentro desta funcão de gerar senha, nós vamos precisar de flags para ver quantos caracteres preciso gerar, se preciso gerar naiusculas, minusculas e etc...
export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {

    const senhaArray = []; // lugar onde vamos imbuir as coisas...
    
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++) {
        // Vamos fazer uma avaliação de curto circuito agora
        maiusculas && senhaArray.push(geraMaiuscula()); // Se a primeira condição for verdadeira execute a segunda e se for falso não vai executar
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
        // Em resumo a cada laço ele imbui estes elementos acima, tudo na sequencia
    }
    return senhaArray.join('').slice(0, qtd) // exibe a senha sem nenhum separadorm e tambem exibe somente a qtd que foi solicitada
}


//geraSenha(10, true) // vai repetir 10 caracteres aleatorios com base no segundo parametro, que no nosso casó é maiusculas, então ele vai colocar 10
// letras aleatorias maiusculas

//geraSenha(2, true, true, true, true); // aqui ele vai colocar 2 caracteres de cada um dos nossos parametros, sempre seguindo a sequencia, quando chega
// no último parametro ele volta no começo e refaz novamente, até completar os laços que passamos