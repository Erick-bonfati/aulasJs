// Esse arquivo vai ficar responsavel pelos estilos do nosso index de Login
import styled from 'styled-components';

// Aqui nos exportamos nosso componentes, como uma const, usando o estilo "styled" e passando a forma "h1"
export const Title = styled.h1`
  /*
  // aqui podemos aplicar condicões, para nosso componente, aqui nos pegamos as propriedades do "h1"
  // que estamos referenciando, e fazendo uma condição para ela
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  */

  // aqui vem o que vem do title
  background: green;

  // e aqui vem oq é do filho do title
  small {
    font-size: 12px;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragrafo = styled.p`
  font-size: 30px;
`;
