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
      userBalance: 0
    }
  }

  componentDidMount() {
    console.log('dash', this.props);
    let userID = this.props.userData.userID
    const options = {userID: userID, currency: 'BTC'};
    this.props.deep.event.emit('checkBalance', options);
    this.props.deep.event.subscribe('returnBalance', this._setUserBalance.bind(this));

    this._setUserData.bind(this);
    let closedTransactions = this.props.deep.record.getList('transactionHistory');
    // closedTransactions.whenReady().getEntries();
    console.log('closed', closedTransactions)
    const queryString = JSON.stringify({
      table: 'open',
      query: [
        [ 'userID', 'match', 'harry' ]
      ]
    })

    let openBuyList = this.props.deep.record.getList('search?' + queryString);
    let openBuyEntries;
    openBuyList.whenReady((list) => {
      openBuyEntries = list.getEntries();
      console.log('open', openBuyEntries)
    });
  }

  _setUserData() {
    const change = _.extend({}, this.state);
    change.userData = this.props.userData
    this.setState(change);
  }

  _setUserBalance(data) {
    console.log('setBalance', data.balance);
    const change = _.extend({}, this.state);
    change.userBalance = data.balance;
    this.setState(change);
  }


  changeRoute(route) {
    this.props.router.push(route);
  }

  render() {
    return (
      <div>
        <Nav toRoute={this.changeRoute.bind(this)} />
        <ExchangeRates deep={this.props.deep} />
        <Row>
        <Transaction userData={this.props.userData} userBalance={this.state.userBalance} deep={this.props.deep} />
        <History deep={this.props.deep} />
        <Graph deep={this.props.deep} />
        </Row>
      </div>
      )
  }
}

export default Dashboard;
