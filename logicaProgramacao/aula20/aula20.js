// if, else

const hora = 20;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) { // Usamos o 'else if = senão' assim, pode repetir quantas vezes quiser, é como uma 'ELIF' do Python
    console.log('Boa tarde');
} else if (hora >= 16 && hora <= 23) {
    console.log('Boa noite');
} else { // Somente else para ser como se todas as condições acima não bater o resultado vai ser esse...
    console.log('Olá');
}
