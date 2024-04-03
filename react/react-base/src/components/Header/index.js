// Nesse componente nós vamos criar o header de qualquer pagina que quisermos usar
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      {/* Nós usamos o link para referenciar onde vamos ser redirecionamos e to para passar a rota */}
      <Link to="/">
        <FaHome size={24} />
      </Link>

      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>

      <Link to="/aleatorio">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
