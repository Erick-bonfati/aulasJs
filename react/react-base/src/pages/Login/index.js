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
        <small>status</small>
      </Title>

      <Paragrafo>This is my test about the server</Paragrafo>
      <button type="button">Send</button>
    </Container>
  );
}
