// Aqui vamos criar um estilo global
import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    background: ${primaryColor}
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

// aqui vamos exportar um container para todas as paginas que quisermos
export const Container = styled.section`
  max-width: 360px;
  background: white;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
