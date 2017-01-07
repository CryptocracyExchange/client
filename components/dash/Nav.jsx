import React from 'react';

import { Router, Route, browserHistory } from 'react-router';
import { Navbar, NavItem, Tabs, Tab, Icon } from 'react-materialize';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('nav props', this.props);
  }

  clickHandler(route) {
    // debugger;
    this.props.toRoute(route);
  }

  render() {
    return (
      <div className="navBar nav-extended">
        <h1>  
          Cryptocracy
        </h1>
        <Tabs className=''>
          <Tab title='BTC/LTC'></Tab>
          <Tab title='LTC/DOGE'></Tab>
          <Tab title='DOGE/BTC'></Tab>
        </Tabs>
        <a className='' onClick={this.clickHandler.bind(this, '/settings')}><Icon> more_vert</Icon> </a>
      </div>
      )
  }
}

export default Nav;


// <Navbar brand='Cryptocracy' right>
//           <NavItem onClick={this.clickHandler.bind(this, '/settings')}> Settings </NavItem>
//         </Navbar>
