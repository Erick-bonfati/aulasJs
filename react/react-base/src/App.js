import React from 'react';

import Login from './pages/Login'; // importando nossa pagina de login
import GlobalStyles from './styles/GlobalStyles'; // importando nossos estilos globais
import Header from './components/Header';

function App() {
  return (
    <>
      {/* exibindo nossa page, e assim estamos usando um componente dentro de outro */}
      <Header />
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
