import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GetStocks from '../pages/GetStocks/GetStocks';
import Favorites from '../pages/Favorites/Favorites';
import PrimaryHeader from '../ui/PrimaryHeader/PrimaryHeader';

const PrimaryLayout = ({ match }) => (
  <div>
    <PrimaryHeader />
    <div>
      <Switch>
        <Route path={'/'} exact component={GetStocks} />
        <Route path={'/favorites'} component={Favorites} />
        <Redirect to={'/'} />
      </Switch>
    </div>
  </div>
);

export default PrimaryLayout;
