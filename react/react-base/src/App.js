import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import GlobalStyles from './styles/GlobalStyles'; // importando nossos estilos globais
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      {/* exibindo nossa page, e assim estamos usando um componente dentro de outro */}
      <Header />
      <Routes />
      <GlobalStyles />
      {/* Aqui estamos definindo quanto tempo vai levar para fechar as mensagem recebidas pelo toastify */}
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

export default App;
