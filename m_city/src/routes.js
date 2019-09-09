import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoutes from './components/authRoutes/privateRoutes';
import PublicRoutes from './components/authRoutes/publicRoutes';

import Home from './components/home';
import SignIn from './components/signin';

import Dashboard from './components/admin/Dashboard';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoutes exact {...props} component={Dashboard} path="/dashboard" />
        <PublicRoutes exact {...props} restricted={true} component={SignIn} path="/sign_in" />
        <PublicRoutes exact {...props} restricted={false} component={Home} path="/" />
      </Switch>
    </Layout>
  )
}

export default Routes;
