import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Row } from 'react-materialize';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler(route) {
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
              <li><a onClick={this.clickHandler.bind(this, '/')}>Logout</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a onClick={this.clickHandler.bind(this, '/settings')}>Settings</a></li>
              <li><a onClick={this.clickHandler.bind(this, '/settings')}>Logout</a></li>
            </ul>

            <ul className="tabs tabs-transparent">
              <li className="tab"><a onClick={() => this.props.currencySelector(0)}>BTC/LTC | 1.5</a></li>
              <li className="tab"><a onClick={() => this.props.currencySelector(1)}>LTC/DOGE | 0.6</a></li>
              <li className="tab"><a onClick={() => this.props.currencySelector(2)}>DOGE/BTC | 7.2</a></li>

            </ul>
          </div>
         </nav>
       </Row>
      )
  }
}

export default Nav;

