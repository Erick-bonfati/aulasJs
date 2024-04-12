
// const caminhoArquivo = path.resolve(__dirname, '..','teste.txt'); // aqui estamos pegando o caminho absoluto da pasta que estamos agora 'aula5' e depois criando o
// arquivo final

// escreve o caminho da pasta que estamos direcionando no path
//fs.writeFile(caminhoArquivo, 'Frase1', { flag: 'w'}) // primeiro passamos o caminho, depois e conteúdo e depois um objeto que contem uma flag que 
// serve para apagar tudo que estiver dentro desse arquivo caso ele já exista e escreve o que estamos pedindo

//fs.writeFile(caminhoArquivo, 'Frase1\n', { flag: 'a'}) // adiciona em vez de apagar o texto que já existe, "\n" para fazer uma quebra de linha


const fs = require('fs').promises;

module.exports = (caminho, dados) => { // aqui estamos passando somente o caminho e os dados que vão ser escritos neste arquivo
    fs.writeFile(caminho, dados, { flag: 'w' });
};
