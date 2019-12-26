import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import './App.css'

import ROUTES from '../routes';
import Home from './Home'
import Add from './Add'
import View from './View'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} component={Home} exact />
        <Route path={ROUTES.ADD} component={Add} exact />
        <Route path={ROUTES.VIEW} component={View} exact />
      </Switch>
    </Router>
  );
};

export default App;
