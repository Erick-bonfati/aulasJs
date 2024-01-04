import 'core-js/stable'

//import './assets/css/style.css'

import 'regenerator-runtime/runtime'

import Login from './modules/Login';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();