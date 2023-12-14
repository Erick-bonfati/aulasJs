// Webpack (Boilerplate) = webpack vai nos ajudar a converter nossos scrips automaticamente para scripts mais antigos


// A configuração do 'Boilerplate' envolve muito node e pode ser meio confusa

// Então vamos um modelo do boilerplate meio que pronto para sempre que quisermos usar, ele vai ser um modelo do 'Webpack'

// Primeiro de tudo vamos utilizar o 'npm init -y' para iniciar um npm nesta pasta aqui

// Para trabalhar com webpack vamos precisar instalar algumas dependencias para ele

// E tudo isso que vamos utilizar vai ser somente em desenvolvimento, na produção usamos o bundle

// Para instalar o babel e o webpack do babel e depois instalar os últimos para pegar o recursos mais novos do javascript no babel/webpack
// npm install --save-dev @babel/preset-env @babel/core @babel/cli babel-loader webpack webpack-cli regenerator-runtime core-js@2

// Depois de criar tudo, vamos fazer agora o arquivo de configuração do 'webpack' e ele precisa ter exatamente este nome:

// webpack.config.js

// E dentro desse configurador nós precisamos importar um módulo do 'node' que se chama 'path' e para criar ele fazemos:

// Continuamos dentro do configurador do webpack...

// podemos colocar um timeOut para o scrip que está rodando as modifições de maneira automatica (SOMENTE LINUX)