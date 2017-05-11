import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';
import Landing from './Landing.jsx';
import Dashboard from './dash/Dashboard.jsx';
import Settings from './settings/Settings.jsx';
import CreateUser from './auth/CreateUser.jsx';
import { Router, Route, IndexRoute, browserHistory, withRouter } from 'react-router';

// const url = '35.167.82.137'; // Need to change to production IP/URL when deploying
const url = 'localhost';
const client = window.deepstream(`${url}:6020`);
let data;

const checkAuth = (nextState, replace, done) => {
  const connectionState = client.getConnectionState();
  const userJWT = window.localStorage.cryptocracy;

  const loginJWTExternal = (replace, done) => {
    client.login({
      role: 'user',
      jwt: userJWT
    }, done);
  };

  const loginJWTInternal = (replace, done) => {
    client.login({
      role: 'user',
      jwt: userJWT
    }, done);
  };

  const loginSuccessExternal = (success, userData) => {
    if (success) {
      window.localStorage.setItem('cryptocracyuserID', userData.userID);
      replace({
        pathname: '/dashboard'
        // state: {data: userData}
      });
      done();
    } else {
      window.localStorage.removeItem('cryptocracy');
      window.localStorage.removeItem('cryptocracyuserID');
      done();
    }
  };

  const loginSuccessInternal = (success, userData) => {
    if (success) {
      window.localStorage.setItem('cryptocracyuserID', userData.userID);
      done();
    } else {
      replace({
        pathname: '/'
      });
      done();
    }
  };

  if (nextState.location.pathname === '/') {
    if (userJWT) {
      loginJWTExternal(replace, loginSuccessExternal);
    } else {
      done();
    }
  } else if (nextState.location.pathname === '/signup') {
    if (userJWT) {
      loginJWTExternal(replace, loginSuccessExternal);
    } else {
      done();
    }
  } else if (nextState.location.pathname === '/dashboard') {
    if (connectionState !== 'OPEN'){
      if (userJWT) {
        loginJWTInternal(replace, loginSuccessInternal);
      } else {
        replace({
          pathname: '/'
        });
        done();
      }
    } else {
      done();
    }
  } else if (nextState.location.pathname === '/settings') {
    if (connectionState !== 'OPEN'){
      if (userJWT) {
        loginJWTInternal(replace, loginSuccessInternal);
      } else {
        replace({
          pathname: '/'
        });
        done();
      }
    } else {
      done();
    }
  }
};

const routes = (
  <Route path="/" client={client} component={App} >
    <IndexRoute component={Landing} onEnter={checkAuth} />
    <Route path="/signup" component={CreateUser} onEnter={checkAuth} />
    <Route path="/dashboard" component={Dashboard} onEnter={checkAuth} />
    <Route path="/settings" component={Settings} onEnter={checkAuth} />
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
