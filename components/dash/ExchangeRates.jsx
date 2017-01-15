import React from 'react';
import { Row, Col, Navbar, NavItem } from 'react-materialize';

class ExchangeRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <Row className="exchangeBar">
        <Col s={1}>
        Exchange
        </Col>
       <Col s={1}>
        Rates
        </Col>
        <Col s={10}>exchangeRates</Col>
      </Row>
    )
  }
}

export default ExchangeRates;



      
