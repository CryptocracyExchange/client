import React from 'react';
import { Row, Col, Navbar, NavItem } from 'react-materialize';

class ExchangeRates extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    let calculate = ( (nextProps - this.state.exchangeRate) / this.state.exchangeRate ) * 100
    this.setState({percent: calculate.toFixed(2)});
    if(this.props.exchangeRate > nextProps) {
      this.setState({isBigger: false});
    } else {
      this.setState({isBigger: true});
    }
  }

  render() {
    let isBigger = this.state ? this.state.isBigger : null;
    let percent = this.state ? this.state.percent : null;
    let positive = (
      <Col className='percentChange' s={1}>
        { percent }% <img src='/img/greenArrow.svg'></img>
      </Col>
    );
    let negative = (
      <Col className='percentChange' s={1}>
        { percent }% <img src='/img/redArrow.svg'></img>
      </Col>
    );
        
    return (
      <Row className="exchangeBar">
        <Col s={1}>
        <span>  {this.props.primaryCurrency}/
        <br/>
        {this.props.secondaryCurrency} </span>
        </Col>
        {isBigger ? positive : negative}
        <Col className='exchRate' s={1}>{this.props.exchangeRate}</Col>
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
