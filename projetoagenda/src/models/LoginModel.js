const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcrypt')


const LoginScrema = new mongoose.Schema({ // Configurando o model
    email: {type: String, required: true},
    password: {type: String, required: true}
})


const LoginModel = mongoose.model('Login', LoginScrema);

class Login {
    constructor(body) {
        this.body = body; // Aqui estamos instanciando a chave do nosso controller para capturar csrf, senha e usuario...
        this.errors = []; // Se tiver algum erro aqui, significa que não podemos cadastrar nosso usuario na base de dados, isso que vai servir para
        // verificar se o usuario pode ou não ser criado na base de dados, e se tiver algum erro nós podemos alertar ele o motivo
        this.user = null;
    }

    async login() {
        this.valida();
        if(this.errors.length > 0) return;
        this.user = await LoginModel.findOne({email: this.body.email}); // primeiro procuramos nosso usuario no banco de dados
        // Agora vamos usar o bcrypt para verificar se a senha digitada está correta

        if(!this.user) { // Se o usuario não existir...
            this.errors.push('Usuário ou senha inválidos.')
            return; // para o código aqui caso de algum erro
        } 

        if(!bcryptjs.compareSync(this.body.password, this.user.password)) { // se a senha digitada for diferente da que existe no banco de dados...
            this.errors.push('Senha inválida');
            this.user = null; //aqui caso de algum erro vamos garantir que ele continue sendo um valor null
            return;
        } 
    }

    async register() { // Como tudo neste método é uma promise 'async' tudo que for utilizar ele precisar ter uma promise para resolver as promises dele também...
        this.valida(); // chama o método válida
        if(this.errors.length > 0) return; // Se o nosso verificador de erros não estiver vázio, faça isso...
        // Caso passe tudo certo na validação agora vamos registrar o usuario na base de dados

        await this.usersExists(); // se o tentarem registrar o mesmo usuario vai gerar um erro, isso retorna uma promise

        if(this.errors.length > 0) return; // faz a verificação novamente, para caso ocorra algum erro na validação

        // Agora vamos criar uma criptográfia para nosso código usando o bcrypt js, para instalar: npm i bcrypt js
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await LoginModel.create(this.body); // retorna a promise com os dados do form e preenche o campo user que estava como 'null' antes...
    }

    async usersExists() {
        this.user = await LoginModel.findOne({email: this.body.email}); // verifica o email do usuario na base de dados

        if(this.user) this.errors.push('Usuário já existe.') // se existe este usuario que estamos verificando já existir ele vai gerar um erro e exibi-lo
    }

    valida() {
        this.cleanUp(); // Método para garantir que tudo dentro do meu body seja uma string, não queremos nada que não seja uma string
        //Validação
        // O e-mail precisa ser válido - importamos o pacote: npm i validator = para validar o email com expressões regulares
        if(!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido') // Valida se não é um email inválido e adiciona um novo 'errors'

        // A senha precisa ter entre 3 e 50 caracteres
        if(this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.') // Adiciona um erro no 'errors'
        }
    }

    cleanUp() {
        for(const key in this.body) {  // Este body é os campos do formulário que estamos recebendo
          if(typeof this.body[key] !== 'string') { // Se o tipo da chave enviada não for string faça isso...
            this.body[key] = ''; // convertendo para uma string vazia
          } 
        }

        this.body = { // garantindo que nosso body tenha somente os campos que queremos
            email: this.body.email,
            password: this.body.password,
        };
    }
}

module.exports = Login;