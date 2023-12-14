// Babel e "can i use"...

// Can i use = site para verificar quais sites o meu recurso "código" tem suporte

// Para conseguir fazer nosso código funcionar em qualquer navegador, podemos usar o 'babel' que ele é quase como um compilador(tradutor) do
// nosso código

// Para iniciar o gerenciador de pacotes do node que é o 'nbm' nesta pasta, digitimos no terminal o comando: npm init -y

// Depois disso um arquivo 'package.json' é criado na sua pasta e se você abrir ele você vai ter algumas informações sobre o nosso projeto

// E esse arquivo é quem vai "gerenciar" quais os pacotes do "node" a gente precisa para o nosso projeto

// Para instalar o babel, que é nosso compilador de códigos, usamos esse comando no terminal:

// npm install --save-dev @babel/cli @babel/preset-env @babel/core

// Só vamos usar o babel para desenvolver nosso sistema

// Usamos '.gitignore' para a pasta ignorar a pasta node_modules já que tem muitos arquivos nela ele não vai ler ela e caso você coloque ela
// num repositório o git não vai ler esse conteúdo


// Agora vamos converter nosso script.js para um script mais moderno com o babel

// npx babel script.js -o bundle.js --presets=@babel/env

// passar o arquivo principal, o arquivo de saida e qual preset vou usar


// Para jogar nosso script para ser executado de maneira automatica:

// Em package.json = em script: adicionamos algo parecido com isso =  "babel": "babel ./script.js -o ./bundle.js --presets=@babel/env -w"

// o '-w' no final é para assistir nosso código e criar de maneira automática

// e para executar o programa: npm run babel, e depois de rodar o programa ele não vai parar de executar o programa, então tudo que a gente
// fizer depois de executa-lo ele vai fazer todas alterações de maneira automática, e para realizar as alterações é só clicar "CTRL + C"