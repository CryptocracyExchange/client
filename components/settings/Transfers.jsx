import React from 'react';

class Transfers extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userID: props.userID,
      currency: 'BTC',
      address: '',
      amount: null,
    };
    this.handleAddressUpdate = this.handleAddressUpdate.bind(this);
    this.handleAmountUpdate = this.handleAmountUpdate.bind(this);
    this.handleCurrencyUpdate = this.handleCurrencyUpdate.bind(this);
    this.handleTransferClick = this.handleTransferClick.bind(this);
    this.client = deepstream('localhost:6020').login({username: 'walletbrowerclient'});
  }

  handleAddressUpdate(e) {
    this.setState({
      address: e.target.value,
    });
  }

  handleAmountUpdate(e) {
    this.setState({
      amount: e.target.value,
    });
  }

  handleCurrencyUpdate(e) {
    this.setState({
      currency: e.target.value,
    });
  }

  handleTransferClick() {
    this.client.event.emit('wallet-transfer-out', {
      userID: this.state.userID,
      currency: this.state.currency,
      amount: this.state.amount,
      address: this.state.address,
    });
  }

  render() {
    return (
      <div>
        <h3>Transfer Out</h3>
        <select name='Currency' onChange={this.handleCurrencyUpdate}>
          <option value='BTC'>BTC</option>
          <option value='LTC'>LTC</option>
          <option value='DOGE'>DOGE</option>
        </select>
        <input 
          type='text' 
          value='this.state.address' 
          placeholder='Enter your address' 
          onChange={this.handleAddressUpdate}>
        </input>
        <input 
          type='text' 
          value='this.state.amount' 
          placeholder='Enter the amount' 
          onChange={this.handleAmountUpdate}>
        </input>
        <button onClick={this.handleTransferClick}>Submit Transfer</button>
      </div>
    )
  }
}

Transfers.propTypes = {
  userID: React.PropTypes.string.isRequired,
  deep: React.PropTypes.object.isRequired
};

export default Transfers;