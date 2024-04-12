
const fs = require('fs').promises // isso é um módulo do próprio coração do node, e no fim passamos promise para fazer a leitura dos arquivos

const { stat } = require('fs');
const path = require('path')

//fs.readdir // essa função vai listar a pasta que estamos
// temos duas versões, assincrona e sincrona

fs.readdir('./')
    .then(files => console.log(files))
    .catch(e => console.log(e))  // assim lemos tudo que está dentro da nossa pasta main "nodeJs"

fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e))  // assim lemos tudo que está dentro da nossa pasta atual "aula4"

// Podemos fazer usando async await também

// Essa função vai delegar um serviço para outra função
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname); // se o readdir retornar um rootDir exibe isso, caso contrario resolva o path, que é a mesma coisa
    const files = await fs.readdir(rootDir); // chama a promise readdir com o valor
    walk(files, rootDir); // passa para outra função
}

async function walk(files, rootDir) {
    for(let file of files) { // para cada arquivo, exibe um por um
        const fileFullPath = path.resolve(rootDir, file) // resolve o dir recebido e o file
        const stats = await fs.stat(fileFullPath); // captura o status do arquivo

        if (/\.git/g.test(fileFullPath)) continue; // se contem algum arquivo .git, ignore ele e continue rodando o código
        if (/\node_modules/g.test(fileFullPath)) continue; // se contem algum arquivo node_modules, ignore ele e continue rodando o código

        if(stats.isDirectory()) { // se o status desses arquivos forem um diretório, liste cada um desses diretórios para mim
            readdir(fileFullPath);
            continue; // continue para não logar os diretórios
        }

        //if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) continue; // pega somente os arquivos '.css' e '.html' da nossa pasta

        console.log(fileFullPath); // retorna se o arquivo é um direitório

        // Em resumo, está função, a cada volta ele pega um arquivo da nossa pasta main "Javascript" e retorna se esses arquivos 
        //são um diretório ou não, e se for ele vai listar cada coisa dentro desse diretório
    }
}

readdir(); // mostra os arquivos dentro da pasta atual

readdir('C://Users/Erick Bonfati/Documents/Programacao/Javascript/'); // mostra os todos arquivos dentro do nosso curso
