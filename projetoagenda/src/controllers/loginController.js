const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado'); // se a seção estiver logado, vamos exibir outra página
    return res.render('login');
}

//Exportando a função de se registrar
exports.register = async function(req, res) { // Função async pois o método register usa promises...
    try {
    // Vamos criar uma instancia da classe login
    const login = new Login(req.body) // Passa os dados de _csrf, login e senha do nosso formulário, agora vamos pegar estes dados e colocar no nosso models
    await login.register();

    // Exibindo as mensagens caso de algum erro na criação do usuario
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() { // Salva a seção e a partir de onde foi enviado o formulário nós voltamos para ela...
            return res.redirect('/login/index');
            });
            return; // Agora é só retornar no formulário algum lugar para exibir o erro que ocorreu na criação do usuário
        }   

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(function() { // Salva a seção e a partir de onde foi enviado o formulário nós voltamos para ela...
        return res.redirect('/login/index');
        });

    } catch(e) {
        console.log(e);
        return res.render('404'); // Se tiver qualquer erro vamos gerar a página 404
    }

    
}

// Exportando a função de login
exports.login = async function(req, res) {
    try {
    const login = new Login(req.body) 
    await login.login();

    // Exibindo as mensagens caso de algum erro na criação do usuario
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() {
            return res.redirect('/login/index');
            });
            return;
        }
        
        if(!login.user) {
            req.flash('errors', login.errors);
            req.session.save(function() {
                return res.redirect('/login/index');
            })
            return;
        }

        req.flash('success', 'Usuário logado com sucesso.');
        req.session.user = login.user; // cria uma seção para dizer que está é uma seção somente dentro do navegador do cliente
        req.session.save(function() {
        return res.redirect('/login/index');
        });

    } catch(e) {
        console.log(e);
        return res.render('404');
    }

}

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
}