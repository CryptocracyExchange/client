import React from 'react';
import { Row, Col, Navbar, NavItem } from 'react-materialize';

class ExchangeRates extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
  //   if (nextProps.perOpen && nextProps.perClose) {
  //     let oldPercent = Math.floor(((this.props.perOpen - this.props.perClose)/this.props.perOpen * 100));
  //     let newPercent = Math.floor(((nextProps.perOpen - nextProps.perClose)/nextProps.perOpen * 100));
  //     if(oldPercent > newPercent) {
  //       // console.log('isSmaller');
  //       this.setState({isBigger: false});
  //     } else {
  //       // console.log('isBigger')
  //       this.setState({isBigger: true});
  //     }
  //   }
  }

  render() {
    console.log('exchangeRate', this.props.exchangeRate);

    // let isBigger = this.state ? this.state.isBigger : null;
    let exchRate = this.props.exchangeRate ? this.props.exchangeRate.toFixed(2) : 0;
    let percent = this.props.perOpen === null && this.props.perClosed === null ? '-' : Math.floor(((this.props.perOpen - this.props.perClose)/this.props.perOpen * 100));
    let percentClass = percent === '-' ? '' : percent === 0 ? '' : percent > 0 ? 'percentUp' : 'percentDown';
    let arrowImage = percentClass === 'percentUp' ? '/img/greenArrow.svg' : '/img/redArrow.svg';
    let arrowStyle = percentClass === '' ? { display: 'none' } : {};
    let positive = (
      <Col className='percentChange' s={1}>
        <span className={percentClass}>
          { percent }%
        </span>
        <img style={arrowStyle} src={arrowImage}></img>
      </Col>
    );

    return (
      <Row className="exchangeBar">
        <Col s={1}>
        <span className='exchange-pair-title'>  {this.props.primaryCurrency}/
        <br/>
        {this.props.secondaryCurrency} </span>
        </Col>
        { positive }
        <Col className='exchRate' s={1}>
          { exchRate }
        </Col>
        <Col s={3}>
          <span className='exchange-chart-data-title'>
            LOW
          </span>
          <span className='exchange-chart-data-info'>
            {this.props.perLow.toFixed(5)}
          </span>
          <span className='exchange-chart-data-title'>
            HIGH
          </span>
          <span className='exchange-chart-data-info'>
            {this.props.perHigh.toFixed(5)}
          </span>
          <span className='exchange-chart-data-title'>
            {this.props.periodDur}
          </span>
        </Col>
        <Col s={6}></Col>
      </Row>
    )
  }
}

export default ExchangeRates;
