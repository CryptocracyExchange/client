import React from 'react';
import Nav from './Nav.jsx';
import ExchangeRates from './ExchangeRates.jsx';
import Transaction from './Transaction.jsx';
import Graph from './Graph.jsx';
import History from './History.jsx';
import _ from 'lodash';
import { Row } from 'react-materialize';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userBalances: {},
      selectedCurrencies: ['BTC', 'LTC']
    }
    this.ds = this.props.deep;
    this.userData = this.props.userData;
    this.userID = this.props.userData.userID;
  }

  componentDidMount() {
    console.log('dash', this.props);
    let userID = this.userData.userID
    this._setUserBalance();
    this._setUserData.bind(this);

    let queryString = JSON.stringify({
      table: 'open',
      query: [
        [ 'userID', 'eq', 'harry' ]
      ]
    });
    this.ds.event.subscribe('search?' + queryString, (data) => {
      console.log('d', data);
    })
    let openBuyList = this.ds.record.getList('search?' + queryString);
    setTimeout(() => {
    openBuyList.whenReady((list) => {
      console.log('new', list.getEntries());
    });
    }, 1000);
  }

  componentWillUnmount() {
    // do something like this to stop listening
    // if( this..isDestroyed === false ) {
    //     this.dsRecord.unsubscribe( this._setState );
    //     this.dsRecord.discard();
    //   }

    //   delete this.dsRecord;
  }

  componentWillUpdate() {
    // needs to subscribe to changes to balances

  }

  _setCurrency(selector) {
    console.log('curr', selector);
    const pairs = [['BTC', 'LTC'],
      ['LTC', 'DOGE'],
      ['DOGE', 'BTC']]
    const change = _.extend({}, this.state);
    change.selectedCurrencies = pairs[selector];
    this.setState(change);
  }

  _init() {
    //  getRecord for balances, transactions by userID, market price
    // balances

  }

  _setUserData() {
    const change = _.extend({}, this.state);
    change.userData = this.userData;
    this.setState(change);
  }

  _setUserBalance() {
    let balances = this.ds.record.getRecord(`balances/${this.props.userData.userID}`);
    balances.whenReady((record) => {
      console.log('setBalance', record.get());
      const change = _.extend({}, this.state);
      change.userBalances = record.get();
      this.setState(change);
    });
    balances.discard();
  }

  changeRoute(route) {
    this.props.router.push(route);
  }

  render() {
    return (
      <div>
        <Nav currencySelector={this._setCurrency.bind(this)} toRoute={this.changeRoute.bind(this)} />
        <ExchangeRates deep={this.props.deep} currencies={this.state.selectedCurrencies} />
        <Row>
          <Transaction
            userData={this.props.userData}
            balances={this.state.userBalances}
            currencies={this.state.selectedCurrencies}
            deep={this.props.deep}
          />
          <History deep={this.props.deep} />
          <Graph deep={this.props.deep} />
        </Row>
      </div>
    )
  }
}

export default Dashboard;
