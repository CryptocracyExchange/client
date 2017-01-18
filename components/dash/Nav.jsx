import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Row, Col } from 'react-materialize';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler(route) {
    this.props.toRoute(route);
  }

  logoutHandler(route) {
    window.localStorage.removeItem('cryptocracy');
    this.props.deep.close();
    this.props.toRoute(route);
  }

  render() {
    return (
          <Row className="navBar">
            <Col s={2}>
              <span>Cryptocracy</span>
            </Col>
            <Col s={3}>
              <a onClick={(e) => this.props.currencySelector(e, 'BTC', 'LTC')}>BTC<span className='fwdSlash'>/</span>LTC</a>&nbsp;
              <a onClick={(e) => this.props.currencySelector(e, 'LTC', 'DOGE')}>LTC<span className='fwdSlash'>/</span>DOGE</a>&nbsp;
              <a onClick={(e) => this.props.currencySelector(e, 'DOGE', 'BTC')}>DOGE<span className='fwdSlash'>/</span>BTC</a>
            </Col>
            <Col s={5}>
            </Col>
            <Col s={2}>
              <a onClick={this.clickHandler.bind(this, '/settings')}>SETTINGS</a>
              <a onClick={this.logoutHandler.bind(this, '/')}>LOGOUT</a>
            </Col>
          </Row>
      )
  }
}

export default Nav;
