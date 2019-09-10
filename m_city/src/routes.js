import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';

import PrivateRoutes from './components/authRoutes/privateRoutes';
import PublicRoutes from './components/authRoutes/publicRoutes';

import Home from './components/home';
import SignIn from './components/signin';

import Dashboard from './components/admin/Dashboard';
import AdminMatches from './components/admin/matches';
import AddEditMatch from './components/admin/matches/addEditMatch'

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoutes exact {...props} component={AddEditMatch} path="/admin_matches/edit_match/:id" />
        <PrivateRoutes exact {...props} component={AdminMatches} path="/admin_matches" />
        <PrivateRoutes exact {...props} component={Dashboard} path="/dashboard" />
        <PublicRoutes exact {...props} restricted={true} component={SignIn} path="/sign_in" />
        <PublicRoutes exact {...props} restricted={false} component={Home} path="/" />
      </Switch>
    </Layout>
  )
}

export default Routes;
