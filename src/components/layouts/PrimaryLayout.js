import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GetStocks from '../pages/GetStocks/GetStocks';
import PrimaryHeader from '../ui/PrimaryHeader/PrimaryHeader';

const PrimaryLayout = ({ match }) => (
  <div>
    <PrimaryHeader />
    <div>
      <Switch>
        <Route path={'/'} exact component={GetStocks} />
        {/* <Route path={'/more'} component={UserSubLayout} /> */}
        {/* <Route path={'/favorites'} component={UserSubLayout} /> */}
        <Redirect to={'/'} />
      </Switch>
    </div>
  </div>
);

export default PrimaryLayout;
