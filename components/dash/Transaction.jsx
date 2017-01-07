import React from 'react';
import { Tabs, Tab, Row, Input, Button, Modal } from 'react-materialize';
import _ from 'lodash';

/* 
toDo:
-subscribe to events regarding status of open or closed or canceled(?)

*/
class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencySelectors: ['BTC', 'LTC'],
      currencySelected: false,
      marketValue: 902,
      price: 0,
      amount: 1
    };
  }

  componentDidMount() {
    console.log('tr', this.props);
  }

  clickHandler(e, type) {
    e.preventDefault();
    if (this.state.currency == 1) {
      console.log('select currency');
    } else {
    const options = {
      userID: this.props.userData.userID,
      currency: this.state.currency,
      price: this.state.price || this.state.marketValue,
      amount: this.state.amount || 1
    };
    console.log('form', options, 'type', 'transaction' + type);
    this.props.deep.event.emit('transaction' + type, options)
    }
  }




  selectCurrency(e) {
    console.log(e.target.value);
    const change = _.extend({}, this.state);
    change.currency = e.target.value;
    if (e.target.value !== '1') {
      change.currencySelected = true;
    }
    this.setState(change);
  }

  formChange(e) {
    console.log(e.target.id, e.target.value);
    const change = _.extend({}, this.state);
    change[e.target.id] = e.target.value;
    this.setState(change);
  }

  render() {
    const buyForm = (
      <div className=''>
        <Row>
          <Input onChange={(e) => this.selectCurrency(e)} s={12} type='select' defaultValue='1'>
            <option value='1'>Currency</option>
            <option value={this.state.currencySelectors[0]}>{this.state.currencySelectors[0]}</option>
            <option value={this.state.currencySelectors[1]}>{this.state.currencySelectors[1]}</option>
          </Input>
          <span>Balance: {this.props.userBalance}</span>
          <Input id='price' onChange={(e) => this.formChange(e)} s={12} label='Price:' defaultValue={this.state.marketValue} />
          <Input id='amount' onChange={(e) => this.formChange(e)} s={12} label='Qty:' defaultValue="1" />
        </Row>
        <Row>
          <Modal
          header='Confirmation'
          fixedFooter
          trigger={
          <Button className={this.state.currencySelected ? 'red' : 'disabled'} waves='light'>
          Sell
          </Button>
          }
          actions={
            [<Button waves='light' onClick={(e) => this.clickHandler(e, 'Sell')} modal='close' flat>Confirm</Button>,
            <Button waves='light' modal='close' flat>Cancel</Button>]
          }
          >
          <p>Do you wish to sell:</p>
          <p>{this.state.amount} &nbsp; {this.state.currency} for {(this.state.price || this.state.marketValue)} ea.</p>
          <br />
          <p>Total: {this.state.amount * (this.state.price || this.state.marketValue)}</p>
        </Modal>
        <Modal
          header='Confirmation'
          fixedFooter
          trigger={
          <Button className={this.state.currencySelected ? '' : 'disabled'} waves='light'>
          Buy
          </Button>
          }
          actions={
            [<Button waves='light' onClick={(e) => this.clickHandler(e, 'Buy')} modal='close' flat>Confirm</Button>,
            <Button waves='light' modal='close' flat>Cancel</Button>]
          }
          >
          <p>Do you wish to buy:</p>
          <p>{this.state.amount} &nbsp; {this.state.currency} for {(this.state.price || this.state.marketValue)} ea.</p>
          <br />
          <p>Total: {this.state.amount * (this.state.price || this.state.marketValue)}</p>
        </Modal>
      
        </Row>
      </div>
    );

  const sellForm = (
      <div className=''>
        <Row>
          <Input onChange={(e) => this.selectCurrency(e)} s={12} type='select' defaultValue='1'>
            <option value='1'>Currency</option>
            <option value={this.state.currencySelectors[0]}>{this.state.currencySelectors[0]}</option>
            <option value={this.state.currencySelectors[1]}>{this.state.currencySelectors[1]}</option>
          </Input>
          <span>Balance: {this.props.userBalance}</span>
          <Input id='price' onChange={(e) => this.formChange(e)} s={12} label='Price:' defaultValue={this.state.marketValue} />
          <Input id='amount' onChange={(e) => this.formChange(e)} s={12} label='Qty:' defaultValue="1" />
        </Row>
        <Row>
        
        </Row>
      </div>
    );

    return (
      <div className="transaction z-depth-0">
      <p>Buy/Sell</p>
        {buyForm}
      </div>
      )
  }
}

export default Transaction;

 // <Tabs className=''>
          // <Tab id='buy' title="Buy" active >{buyForm}</Tab>
          // <Tab id='sell' title="Sell" >{sellForm}</Tab>
        // </Tabs>
