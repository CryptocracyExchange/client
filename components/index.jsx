import React from 'react';
import ReactDom from 'react-dom';
import Landing from './Landing.jsx';
import App from './App.jsx';
import Dashboard from './dash/Dashboard.jsx';
import Settings from './settings/Settings.jsx';

import CreateUser from './auth/CreateUser.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="/signup" component={CreateUser} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/settings" component={Settings} />
  </Route>
)

ReactDom.render(
  (
    <Router history={browserHistory} routes={routes}/>
  ),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
