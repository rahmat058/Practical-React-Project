import React from 'react';
import Layout from './Hoc/Layout';
import { Switch } from 'react-router-dom';

import PrivateRoutes from './components/authRoutes/privateRoutes';
import PublicRoutes from './components/authRoutes/publicRoutes';

import Home from './components/home';
import SignIn from './components/signin';
import TheTeam from './components/the_team';
import TheMatches from './components/the_matches';
import NotFound from './components/ui/not_found';

import Dashboard from './components/admin/Dashboard';
import AdminMatches from './components/admin/matches';
import AddEditMatch from './components/admin/matches/addEditMatch';
import AdminPlayers from './components/admin/players';
import AddEditPlayers from './components/admin/players/addEditPlayers';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoutes exact {...props} component={AddEditPlayers} path="/admin_players/add_player" />
        <PrivateRoutes exact {...props} component={AddEditPlayers} path="/admin_players/add_player/:id" />
        <PrivateRoutes exact {...props} component={AdminPlayers} path="/admin_players" />
        <PrivateRoutes exact {...props} component={AddEditMatch} path="/admin_matches/edit_match" />
        <PrivateRoutes exact {...props} component={AddEditMatch} path="/admin_matches/edit_match/:id" />
        <PrivateRoutes exact {...props} component={AdminMatches} path="/admin_matches" />
        <PrivateRoutes exact {...props} component={Dashboard} path="/dashboard" />
        <PublicRoutes exact {...props} restricted={true} component={TheMatches} path="/the_matches" />
        <PublicRoutes exact {...props} restricted={true} component={TheTeam} path="/the_team" />
        <PublicRoutes exact {...props} restricted={true} component={SignIn} path="/sign_in" />
        <PublicRoutes exact {...props} restricted={false} component={Home} path="/" />
        <PublicRoutes exact {...props} restricted={false} component={NotFound} />
      </Switch>
    </Layout>
  )
}

export default Routes;
