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
        <span>  {this.props.primaryCurrency}/
        <br/>
        {this.props.secondaryCurrency} </span>
        </Col>
        <Col className='percentChange' s={1}>
          3.40% <img src='/img/greenArrow.svg'></img>
        </Col>
        <Col className='exchRate' s={1}>0.00475</Col>
        <Col s={3}>   
          LOW {this.props.perLow}
          &nbsp;&nbsp;
          HIGH {this.props.perHigh}
        </Col>
        <Col s={6}></Col>
      </Row>
    )
  }
}

export default ExchangeRates;



      
