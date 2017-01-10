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
    this.ds = props.deep;
    this.userData = props.userData;
    this.userID = props.userData.userID;

    this.balances = this.ds.record.getRecord(`balances/${this.userID}`);
  }

  componentDidMount() {
    console.log('dash', this.props);
    // get user balances
    this.balances.whenReady((record) => {
      console.log('setBalance', record.get());
      let change = _.extend({}, this.state);
      change.userBalances = record.get();
      this.setState(change);
      record.subscribe('BTC', (data) => {
        console.log('newBal', data);
        // const change = _.extend({}, this.state);
        // change.userBalances = data;
        // this.setState(change);
      })
    })

    this._setUserData.bind(this);

    let queryString = JSON.stringify({
      table: 'open',
      query: [
        [ 'userID', 'eq', 'harry' ]
      ]
    });
  }

  componentWillUnmount() {
    this.balances.discard();

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
