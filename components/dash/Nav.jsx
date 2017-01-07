import React from 'react';

import { Router, Route, browserHistory } from 'react-router';
import { Navbar, NavItem, Tabs, Tab, Icon, Row } from 'react-materialize';



$(document).ready(function(){
    $('ul.tabs').tabs();
  });
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
       <Row className='z-depth-0'>
         <nav className="nav-extended z-depth-2">
          <div className="nav-wrapper green-text">
            <a href="#" className="brand-logo">Cryptocracy</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a onClick={this.clickHandler.bind(this, '/settings')}>Settings</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a onClick={this.clickHandler.bind(this, '/settings')}>Settings</a></li>
            </ul>
         
            <ul className="tabs tabs-transparent">
              <li className="tab"><a href="#test1">BTC/LTC</a></li>
              <li className="tab"><a href="#test2">LTC/DOGE</a></li>
              <li className="tab "><a href="#test3">DOGE/BTC</a></li>
            </ul>
          </div>
         </nav>
       </Row>
      )
  }
}

export default Nav;


// 
 // <div className="navBar">
 //      <Navbar className='extended' brand='Cryptocracy' right>
 //        <NavItem>
 //          <Tabs className=''>
 //            <Tab active title='BTC/LTC'></Tab>
 //            <Tab title='LTC/DOGE'></Tab>
 //            <Tab title='DOGE/BTC'></Tab>
 //          </Tabs>
 //        </NavItem>
          // <NavItem onClick={this.clickHandler.bind(this, '/settings')}>
            // <Icon> more_vert</Icon>
          // </NavItem>
      // </Navbar>
      // </div>

 // <div className="navBar nav-extended">
        // <h1>  
          // Cryptocracy
        // </h1>
        // <Tabs className=''>
          // <Tab active title='BTC/LTC'></Tab>
          // <Tab title='LTC/DOGE'></Tab>
          // <Tab title='DOGE/BTC'></Tab>
        // </Tabs>
        // <a className='' onClick={this.clickHandler.bind(this, '/settings')}><Icon> more_vert</Icon> </a>
      // </div>
