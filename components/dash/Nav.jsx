import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Row } from 'react-materialize';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#FDFDFD',
  },
  appBar: {
    height: 100,
    fontFamily: 'DecimaMonoPro'
  },
});



class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler(route) {
    this.props.toRoute(route);
  }

  logoutHandler(route) {
    console.log('hits logout handler');
    // console.log('window.deepstream is: ', window.deepstream);
    console.log('this.props.deep is: ', this.props.deep);
    this.props.deep.close();
    // this.props.deep('localhost:6020'); // Need to change to production IP/URL when deploying
    this.props.toRoute(route);
  }

  render() {
    return (
      <Row className='z-depth-0'>
         <nav className="nav-extended z-depth-2">
          <div className="nav-wrapper green-text">
            <a className="brand-logo">Cryptocracy</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a onClick={this.clickHandler.bind(this, '/settings')}>Settings</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a onClick={this.clickHandler.bind(this, '/settings')}>Settings</a></li>
            </ul>

            <ul className="tabs tabs-transparent">
              <li className="tab"><a onClick={() => this.props.currencySelector('BTC', 'primary')}>BTC</a></li>
              <li className="tab"><a onClick={() => this.props.currencySelector('LTC', 'primary')}>LTC</a></li>
              <li className="tab"><a onClick={() => this.props.currencySelector('DOGE', 'primary')}>DOGE</a></li>

            </ul>
          </div>
         </nav>
       </Row>
      )
  }
}

export default Nav;
