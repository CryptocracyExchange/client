import React from 'react';
import { Tabs, Tab, Row, Input, Button, Modal, Col } from 'react-materialize';
import _ from 'lodash';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marketValue: 902,
      price: 0,
      amount: 1
    };
  }

  componentDidMount() {
    console.log('tr', this.props)
  }

  clickHandler(e, type) {
    e.preventDefault();
    if (this.state.currency == 1) {
      console.log('select currency');
    } else {
    const options = {
      userID: this.props.userData.userID,
      type: type,
      currFrom: this.props.primaryCurrency,
      currTo: this.props.secondaryCurrency,
      price: this.state.price || this.state.marketValue,
      amount: this.state.amount || 1
    };
    this.props.deep.event.emit('transaction', options);
    }
  }

  formChange(e) {
    const change = _.extend({}, this.state);
    change[e.target.id] = e.target.value;
    this.setState(change);
  }

  render() {
    const sellModal = (
      <Modal
        header='Confirmation'
        fixedFooter
        trigger={
        <div className='sellBtn' waves='light'>
        Sell
        </div>
        }
        actions={
          [<Button waves='light' onClick={(e) => this.clickHandler(e, 'sell')} modal='close' flat>Confirm</Button>,
          <Button waves='light' modal='close' flat>Cancel</Button>]
        }
        >
        <p>Do you wish to sell:</p>
        <p>{this.state.amount} &nbsp; {this.props.secondaryCurrency} for {(this.state.price || this.state.marketValue)} {this.props.primaryCurrency}ea.</p>
        <br />
        <p>Total: {this.state.amount * (this.state.price || this.state.marketValue)}</p>
      </Modal>
    );

    const buyModal = (
      <Modal
        header='Confirmation'
        fixedFooter
        trigger={
        <div className='buyBtn' waves='light'>
        Buy
        </div>
        }
        actions={
          [<Button waves='light' onClick={(e) => this.clickHandler(e, 'buy')} modal='close' flat>Confirm</Button>,
          <Button waves='light' modal='close' flat>Cancel</Button>]
        }
        >
        <p>Do you wish to buy:</p>
        <p>{this.state.amount} &nbsp; {this.props.secondaryCurrency} for {(this.state.price || this.state.marketValue)} {this.props.primaryCurrency} ea.</p>
        <br />
        <p>Total: {this.state.amount * (this.state.price || this.state.marketValue)}</p>
      </Modal>
    );

    const transactionForm = (
      <div className=''>
        <div className='transWrapper'>
          <Row className='balanceWrapper'> 
            <span>Balance:</span>
            { this.props.primaryBalance.available || 0 } &nbsp; {this.props.primaryCurrency}<br/>
            { this.props.secondaryBalance.available || 0 } &nbsp; {this.props.secondaryCurrency}
          </Row> 
          <Row>
            <Col s={2}>
              <span>PRICE</span>
            </Col>
              <Input 
                id='price' 
                onChange={(e) => this.formChange(e)} 
                s={4}
                defaultValue={this.state.marketValue} 
              />
            <Col s={1}>{this.props.primaryCurrency}</Col>
          </Row>
          <Row>  
            <Col s={2}>
              <span>AMOUNT</span>
            </Col>
            <Input 
              id='amount' 
              onChange={(e) => this.formChange(e)} 
              s={4} 
              defaultValue="1" 
            /> 
            <Col s={1}>{this.props.secondaryCurrency}</Col>
          </Row>
          <Row className='total'>
            <Col s={2}>
              <span>TOTAL</span>
            </Col>
            <Col s={5}>
              {this.state.amount * this.state.price || 0}
            </Col>
          </Row>
        </div>
          <div className='btnWrapper'>
            {sellModal}
            {buyModal}
          </div>
      </div>
    );

  return (
    <div className="transaction">
    <div className='header'>
      Trade
    </div>
    <Row>
      <Col className='wrapper' s={12}>
      {transactionForm}
      </Col>
    </Row>
    </div>
    )
  }
}

export default Transaction;
