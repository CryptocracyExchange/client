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
    window.localStorage.removeItem('cryptocracyuserID');
    this.props.deep.close();
    this.props.toRoute(route);
  }

  render() {
    return (
      <Row className="navBar">
        <Col s={2}>
          <span>Cryptocracy</span>
        </Col>
        <Col s={8}>
        </Col>
        <Col s={2}>
          <a onClick={this.clickHandler.bind(this, '/dashboard')}>HOME</a>
          &nbsp;&nbsp;
          <a onClick={this.logoutHandler.bind(this, '/')}>LOGOUT</a>
        </Col>
      </Row>
    )
  }
}

export default Nav;
