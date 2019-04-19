import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyLoadable from './utils/loadable'
import './App.css';

const LayOut = MyLoadable({ loader: () => import( /* webpackChunkName: "App" */ './layouts/index') })

class RouterIndex extends Component {
  render() {
    return (
      <Router >
        <Switch >
          <Route path="/" component={LayOut} />
        </Switch>
      </Router>
    )
  }
}

class App extends Component {
  render() {
    return (
      <RouterIndex />
    );
  }
}

export default App;