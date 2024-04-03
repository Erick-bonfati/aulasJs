import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      {/* Aqui passamos a rota que vai ser acessada daqui */}
      {/* Usamos 'exact' para referenciar somente o componente que estamos pedindo */}
      {/* No 'path' passamos a rota que o servidor vai acessar */}
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
