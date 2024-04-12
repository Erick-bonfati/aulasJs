// Criando um promise
function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hey, i'm the promise")
            resolve();
        }, 2000);
        });
}

export default async function () { // aqui estamos exportando uma função 'default' e assincrona
    await promise();
    console.log('Terminou')
}