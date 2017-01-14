import React from 'react';
import { Tabs, Tab, Row, Input, Button, Modal, Col } from 'react-materialize';
import _ from 'lodash';

/* 
toDo:
-subscribe to events regarding status of open or closed or canceled(?)

*/
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
      currFrom: this.props.primaryCurrency,
      currTo: this.props.secondaryCurrency,
      price: this.state.price || this.state.marketValue,
      amount: this.state.amount || 1
    };
    console.log('form', options, 'type', 'transaction' + type);
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
        <Button className='red' waves='light'>
        Sell
        </Button>
        }
        actions={
          [<Button waves='light' onClick={(e) => this.clickHandler(e, 'Sell')} modal='close' flat>Confirm</Button>,
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
        <Button className='green' waves='light'>
        Buy
        </Button>
        }
        actions={
          [<Button waves='light' onClick={(e) => this.clickHandler(e, 'Buy')} modal='close' flat>Confirm</Button>,
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
        <Row>
          <Col s={12}>
            You Have:
            <span>{this.props.primaryCurrency}: { this.props.primaryBalance.available || 0 }</span><br/>
            <span>{this.props.secondaryCurrency}: { this.props.secondaryBalance.available || 0 }</span>
          </Col>
        </Row>
        <Row>
          <Input 
            id='price' 
            onChange={(e) => this.formChange(e)} 
            s={10} 
            label='Price:' 
            defaultValue={this.state.marketValue} 
          />
          <Col s={2}>{this.props.primaryCurrency}</Col>
        </Row>
        <Row>
          <Input 
            id='amount' 
            onChange={(e) => this.formChange(e)} 
            s={10} 
            label='Amount:' 
            defaultValue="1" 
          /> 
          <Col s={2}>{this.props.secondaryCurrency}</Col>
        </Row>
        <Row>
          <Col s={6} className='center-align'>{sellModal}</Col>
          <Col s={6} className='center-align'>{buyModal}</Col>
        </Row>
      </div>
    );

  return (
    <div className="transaction z-depth-2">
    <Row>
      <Col s={12}>Buy/Sell</Col>
    </Row>
      {transactionForm}
    </div>
    )
  }
}

export default Transaction;
