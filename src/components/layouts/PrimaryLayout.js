import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrimaryHeader from '../ui/PrimaryHeader'
import HomePage from '../pages/HomePage'

// Sub Layouts
import UserSubLayout from './UserSubLayout'

const PrimaryLayout = ({ match }) => (
  <div>
    <PrimaryHeader />
    <div>
      <Switch>
        <Route path={`${match.path}`} exact component={HomePage} />
        <Route path={`${match.path}users`} component={UserSubLayout} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </div>
  </div>
);
export default PrimaryLayout
