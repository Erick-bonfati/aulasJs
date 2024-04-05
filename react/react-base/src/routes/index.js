import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  toast.success('Oi, sucesso!');
  toast.error('Oi, erro!');
  return (
    <Switch>
      {/* Aqui passamos a rota que vai ser acessada daqui */}
      {/* Usamos 'exact' para referenciar somente o componente que estamos pedindo */}
      {/* No 'path' passamos a rota que o servidor vai acessar */}
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
