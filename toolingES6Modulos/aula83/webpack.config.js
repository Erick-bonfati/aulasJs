
// Importamos o módulo path e salvamos numa variável
const path = require('path'); // CommonJS - isso é o padrão do node

// Todo arquivo no node é um módulo especifico

// esses arquivos são como um return de uma função, só retornamos o modulo que precisamos

// Agora vamos exportar este objeto, e tudo que estiver dentro deste objeto vai ser exportado para fora dele
// E este objeto vai ser a configuração do webpack
module.exports = {
    mode: 'production',
    entry: './src/index.js', // passamos o caminho dele e o nome do arquivo que vamos pegar
    output: { // aqui vamos entrar no arquivo js da nossa pasta public, _dirname = pega o caminho do webpack da pasta que estamos
        path: path.resolve(__dirname, 'public', 'assets', 'js'), // o caminho que vamos jogar nosso path
        filename: 'bundle.js' // nome do arquivo que vai ser inserido lá
    },
    //Agora vamos pedir para passar o código dentro do babel e depois você retorna o bundle
    module: {
        rules: [{ // as regras vai ser um array com varios objetos dentro, isso porque cada regra vai ter seu loader especifico
            exclude: /node_modules/, // pedimos para o webpack excluir esta pasta, pois pode deixar o sistema muito lento, usando expressão regular e o nome do arquivo
            test: /\.js$/, // pede para testar qual o arquivo que você vai ler... e ai você vai formar meu 'bundle' com esses arquivos aqui
            use: { // vamos dizer que ele vai usar agora
                loader: 'babel-loader', // escolhendo o loader que ele vai usar,
                options: {
                    presets: ['@babel/env'] // selecionando as presets que vamos utilizar
                }
            }
        }] 
    },
    devtool: 'source-map' // gera um mapeamento, mapea um erro, ou um load, ele vai mapear no arquivo original...
};

// mode: 'development' - é gerado um pouco mais rápido, ele não é minificado, ele só gera o arquivo com um monte de linhas, comentários...
// o mode: minificado diminui ao máximo nosso arquivo para deixar as coisas mais rápidas, e arquivo não tem quebra de
// linhas, é feito tudo numa linha só, nomes de variaveis encurtados...

// Agora que vamos trabalhar num sistema de módulos, a gente não precisar trabalhar e somente um único arquivo JAVASCRIPT
// Por exemplo, uma classe pode ser um módulo, outra classe outro módulo e assim em diante

// Nós vamos trabalhar sempre dentro de uma pasta com nosso código fonte e esse código vai ficar na pasta 'src' = source e vamos ter outra pasta
// publica gerada pelo webpack

// Normalmente num arquivo maior nós vamos ter o webpack gerenciando imagem, um css, sas entre outras...

// E como ter 10 arquivos no código fonte, e 4 no arquivo público

// Agora vamos criar um arquivo dentro da nossa pasta 'src' = source

// Feito tudo acima, já podemos testar nosso webpack criando um script no package.json