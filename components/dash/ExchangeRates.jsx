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
          <div className='currBtn center-align' onClick={() => this.props.currencySelector(this.props.secondaryCurrencies[0], 'secondary')}>
          {this.props.secondaryCurrencies[0]}
          </div>
        </Col>
       <Col s={1}>
          <div className='currBtn center-align' onClick={() => this.props.currencySelector(this.props.secondaryCurrencies[1], 'secondary')}>
          {this.props.secondaryCurrencies[1]}
          </div>
        </Col>
        <Col s={10}>HELLA SHIT</Col>
      </Row>
    )
  }
}

export default ExchangeRates;

// onClick={() => this.props.currencySelector(this.props.secondaryCurrencies[0], 'secondary')}


      
