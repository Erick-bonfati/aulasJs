// Aqui vamos criar um estilo global
import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors'; // importa tudo como "colors" de cores
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  // Agora vamos modificar o toastify
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor};
    color: white;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
  color: white;
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
