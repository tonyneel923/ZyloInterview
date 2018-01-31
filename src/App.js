import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PrimaryLayout from './components/layouts/PrimaryLayout';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PrimaryLayout} />
          <Redirect to="/auth" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
