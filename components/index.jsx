import React from 'react';
import ReactDom from 'react-dom';
import Landing from './Landing.jsx';
import App from './App.jsx';
import Dashboard from './dash/Dashboard.jsx'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDom.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);
