import React from 'react';

class Addresses extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      userID: props.userID,
      BTCAddress: '',
      LTCAddress: '',
      DOGEAddress: ''
    };
  
    this.userWallet = props.deep.record.getRecord(`wallets/${props.userID}`);
  }

  componentDidMount() {
    this.userWallet.subscribe('BTC.address', (address) => {
      this.setState({ BTCAddress: address });
    });
    this.userWallet.subscribe('LTC.address', (address) => {
      this.setState({ LTCAddress: address });
    });
    this.userWallet.subscribe('DOGE.address', (address) => {
      this.setState({ DOGEAddress: address });
    });
  }

  componentWillUnmount() {
    console.log('Settings is going to unmount.');
    this.userWallet.discard();
  }

  handleGenerateWalletClick(type) {
    this.props.deep.event.emit('wallet-create', { userID: this.state.userID, currency: type });
  }

  render() {
    return (
      <div>
        <h4 className="settingsHeader">Generate Wallets</h4>
        <button onClick={() => this.handleGenerateWalletClick('BTC')}>Generate BTC Address</button>
        &nbsp;&nbsp;
        <button onClick={() => this.handleGenerateWalletClick('LTC')}>Generate LTC Address</button>
        &nbsp;&nbsp;
        <button onClick={() => this.handleGenerateWalletClick('DOGE')}>Generate DOGE Address</button>
        <br/><br/>
        <div>BTC Address: {this.state.BTCAddress}</div>
        <div>LTC Address: {this.state.LTCAddress}</div>
        <div>DOGE Address: {this.state.DOGEAddress}</div>
      </div>
    )
  }
}

Addresses.propTypes = {
  userID: React.PropTypes.string.isRequired,
  deep: React.PropTypes.object.isRequired
};

export default Addresses;
