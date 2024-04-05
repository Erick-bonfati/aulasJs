// Nesse rota vamos utilizar para validar e verificar se o usuario está logado ou não

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Aqui nos passamos como parametro um component, um método para verificar se a rota está
// fechada e o resto dos componentes
export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false; // esse variavel vai estar disponivel dentro do estado do 'redux'
  // o Redux vai estar presente dentro de toda aplicação como se fosse um estado global

  // verifica se a rota está fechada e se o usuario não está logado
  if (isClosed && !isLoggedIn) {
    return (
      /* Aqui nós passamos a rota em que ele vai redirecionar caso caia na condição acima */
      /* "prevPath = serve para pegar o caminho antigo em que o usuario estava para poder
            redirecionar para a nova rota" */
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // Aqui passamos a rota com o resto dos componentes e nosso componente
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

// Gerando um valor padrão para tudo que não for requerido!
MyRoute.defaultProps = {
  isClosed: false,
};

// Aqui estamos validando os componentes do react
MyRoute.propTypes = {
  // aqui passamos se eo component que estamos passando, vai ser um elemento ou uma função
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool, // passamos que essa rota é um valor booleano e que não é requerido
};
