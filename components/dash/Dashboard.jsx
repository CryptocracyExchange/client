import React from 'react';
import Nav from './Nav.jsx';
import ExchangeRates from './ExchangeRates.jsx';
import Transaction from './Transaction.jsx';
import GraphWrapper from './GraphWrapper.jsx';
import History from './History.jsx';
import _ from 'lodash';
import { Row, Col } from 'react-materialize';
import { TypeChooser, fitWidth } from 'react-stockcharts';
import mockData from '../../test/mockdata.js';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userBalances: {
        'BTC': {
          available: 0,
          actual: 0
        },
       'LTC': {
          available: 0,
          actual: 0
        },
        'DOGE': {
          available: 0,
          actual: 0
        }
      },
      primaryCurrency: 'BTC',
      secondaryCurrency: 'LTC',
      secondaryCurrencies: ['LTC', 'DOGE'],
      chartData: null
    }
    this.ds = props.deep;
    this.userData = props.userData;
    this.userID = props.userData.userID;

    this.balances = this.ds.record.getRecord(`balances/${this.userID}`);
    this.ds.event.emit('getData');
    this.ds.event.subscribe('histData', (data) => {
      console.log('hist', data);
      const change = _.extend({}, this.state);
      change.chartData = data;
      this.setState(change);
    })
  }

  componentDidMount() {
    // get user balances
    console.log('hello');
    this.balances.whenReady((record) => {
      const change = _.extend({}, this.state);
      change.userBalances = record.get();
      this.setState(change);
    });

    this.balances.subscribe((data) => {
      console.log('newBal', data);
      const change = _.extend({}, this.state);
      change.userBalances = data;
      this.setState(change);
    });

    this._setUserData.bind(this);

    //notification for closed orders
    this.ds.event.subscribe('closedSale', (data) => {
      console.log('toast!', data)
      Materialize.toast('Success! An order was filled!', 4000);
    })

    // setInterval(() => console.log('st', this.state.chartData), 2000);

    //init get historical data for graph
    // subscribe to updates to graph
  }
  componentWillUnmount() {
    this.balances.discard();

  }

  _setCurrency(currency, type) {
    console.log('curr', currency, type);
    const change = _.extend({}, this.state);
    if (type === 'primary') {
      let selector;
      let pairs = [['LTC', 'DOGE'],
                  ['BTC', 'DOGE'],
                  ['LTC', 'BTC']]
      if (currency === 'BTC') {
        selector = 0;
      } else if (currency === 'LTC') {
        selector = 1;
      } else {
        selector = 2;
      }
      change.secondaryCurrencies = pairs[selector];
      change.secondaryCurrency = pairs[selector][0];
    }
    change[type + 'Currency'] = currency;
    this.setState(change);
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
        <ExchangeRates
          currencySelector={this._setCurrency.bind(this)}
          secondaryCurrencies={this.state.secondaryCurrencies}
          />
        <Row>
          <Col s={2}>
            <Transaction
              userData={this.props.userData}
              primaryCurrency={this.state.primaryCurrency}
              secondaryCurrency={this.state.secondaryCurrency}
              primaryBalance={this.state.userBalances[this.state.primaryCurrency]}
              secondaryBalance={this.state.userBalances[this.state.secondaryCurrency]}
              deep={this.props.deep}
            />
             <History userID={this.props.userData.userID} deep={this.props.deep} />
          </Col>

         <Col s={10}>
          <GraphWrapper data={this.state.chartData}/>
         </Col>
        </Row>
      </div>
    )
  }

}

export default Dashboard;
