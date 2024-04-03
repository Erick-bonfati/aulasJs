// Nesse componente nós vamos criar o header de qualquer pagina que quisermos usar
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="">
        <FaHome size={24} />
      </a>

      <a href="">
        <FaUserAlt size={24} />
      </a>

      <a href="">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
