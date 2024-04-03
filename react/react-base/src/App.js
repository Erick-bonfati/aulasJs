import React from 'react';

import Login from './pages/Login'; // importando nossa page

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      {/* exibindo nossa page, e assim estamos usando um componente dentro de outro */}
      <Login />
      <GlobalStyles />
    </>
  );
}

export default App;
