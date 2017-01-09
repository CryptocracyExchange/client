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
      isCurrencySelected: false,
      currencySelected: null,
      marketValue: 902,
      price: 0,
      amount: 1
    };
  }

  componentDidMount() {
    const change = _.extend({}, this.state);
    change.currencySelectors = this.props.currencies;
    this.setState(change);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const change = _.extend({}, this.state);
    change.currencySelectors = nextProps.currencies;
    change.isCurrencySelected = false;
    change.currencySelected = null;
    this.setState(change);
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
    this.props.deep.event.emit('transaction' + type, options);
    }
  }

  selectCurrency(e) {
    const change = _.extend({}, this.state);
    change.currencySelected = e.target.value;
    if (e.target.value !== '1' && this.props.balances[e.target.value]) {
      change.isCurrencySelected = true;
    } else {
      change.isCurrencySelected = false;
    }
    this.setState(change);
  }

  formChange(e) {
    const change = _.extend({}, this.state);
    change[e.target.id] = e.target.value;
    this.setState(change);
  }

  render() {
    let balance = () => {
      if (this.state.currencySelected === null) {
         return 'select currency'
        } else {
         return this.props.balances[this.state.currencySelected] || 'add funds'
        }};

    const buyModal = (
      <Modal
        header='Confirmation'
        fixedFooter
        trigger={
        <Button className={this.state.isCurrencySelected ? 'red' : 'disabled'} waves='light'>
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
    );

    const sellModal = (
      <Modal
        header='Confirmation'
        fixedFooter
        trigger={
        <Button className={this.state.isCurrencySelected ? '' : 'disabled'} waves='light'>
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
    );

    const transactionForm = (
      <div className=''>
        <Row>
          <Input onChange={(e) => this.selectCurrency(e)} s={12} type='select' defaultValue='1'>
            <option value='1'>Currency</option>
            <option value={this.state.currencySelectors[0]}>{this.state.currencySelectors[0]}</option>
            <option value={this.state.currencySelectors[1]}>{this.state.currencySelectors[1]}</option>
          </Input>
          &nbsp;<span>Balance: { balance() }</span>
          <Input id='price' onChange={(e) => this.formChange(e)} s={12} label='Price:' defaultValue={this.state.marketValue} />
          <Input id='amount' onChange={(e) => this.formChange(e)} s={12} label='Qty:' defaultValue="1" />
        </Row>
        <Row>
          &nbsp;&nbsp;&nbsp;
          {buyModal}
          &nbsp;&nbsp;&nbsp;
          {sellModal}
        </Row>
      </div>
    );

  return (
    <div className="transaction z-depth-0">
    &nbsp;Buy/Sell
      {transactionForm}
    </div>
    )
  }
}

export default Transaction;
