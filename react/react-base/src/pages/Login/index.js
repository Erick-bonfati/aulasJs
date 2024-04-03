import React from 'react';

import { Container } from '../../styles/GlobalStyles';

import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      {/* Aqui nos passamos nosso componente pego do styled e passamos uma função nele
      isRed={false} */}
      <Title>
        Login
        <small>Oie</small>
      </Title>

      <Paragrafo>Lortem asdapoghpa aopsi djapo poia</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
