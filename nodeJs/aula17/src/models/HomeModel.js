// Colocamos o nome do arquivo com a primeira letra maiuscula pois geralmente o nosso módulo vai ser uma classe

const mongoose = require('mongoose')

//Usando mongoose pois o MongoDB só vai jogar nossos dados lá, ele não vai tratar de maneira nenhuma, então precisamos usar o mongoose para isso, ex:
// Validação de dados, Confirmação quando salvamos algum dado, se ele foi salvado exatamente como queriamos
const HomeSchema = new mongoose.Schema({ // Passando a modelagem dos nossos dados, e dentro dele precisamos colocar um objeto com a config dos dados que queremos
    titulo: {type: String, required: true},//Passamos o tipo de dados que queremos dentro de um objeto, passando o tipo do dados e que ele é obrigatorio
    descricao: String
})


const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;