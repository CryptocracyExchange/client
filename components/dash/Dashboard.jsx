import React from 'react';
import Nav from './Nav.jsx';
import ExchangeRates from './ExchangeRates.jsx';
import Transaction from './Transaction.jsx';
import GraphWrapper from './GraphWrapper.jsx';
import GraphControls from './GraphControls.jsx';
import History from './History.jsx';
import TrollBox from './TrollBox/index.jsx';
import _ from 'lodash';
import { Row, Col } from 'react-materialize';
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
      chartData: null,
      periodDur: '5m',
      perLow: 0.00475,
      perHigh: 0.00475,
      exchangeRate: null
    }
    this.ds = props.deep;
    this.userData = props.userData;
    this.userID = props.userData.userID;

    this._chartData;

    this.balances = this.ds.record.getRecord(`balances/${this.userID}`);
    this.ds.event.subscribe('histData', (data) => {
      console.log('hist', data);
      const change = _.extend({}, this.state);
      change.chartData = data;
      this.setState(change);
    })
  }

  componentDidMount() {
    // get chart data
    this._getChartData('5m') // replace with default
    // get user balances
    this.balances.whenReady((record) => {
      const change = _.extend({}, this.state);
      change.userBalances = record.get();
      this.setState(change);
    });
    // subscribe to balance changes
    this.balances.subscribe((data) => {
      console.log('newBal', data);
      const change = _.extend({}, this.state);
      change.userBalances = data;
      this.setState(change);
    });
    //notification for closed orders
    this.ds.event.subscribe('closedSale', (data) => {
      console.log('toast!', data)
      if (data.userID === this.userID) {
        Materialize.toast('Success! An order was filled!', 4000);
      }
    })

    // set exchange rate
    // this._setExchangeRate(this.state.primaryCurrency, this.state.secondaryCurrency);
  }

  componentWillUnmount() {
    this.balances.discard();
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('nextState', nextState)
    if (this.state.primaryCurrency !== nextState.primaryCurrency || this.state.secondaryCurrency !== nextState.secondaryCurrency || this.state.periodDur !== nextState.periodDur) {
      // if (this.state.chartData) {
      //   this.setState({chartData: null})
      // }
      setTimeout(() => {
        // refactor to pass nextState instead of referencing state
        this._getChartData(nextState.periodDur);
      }, 200);
    }
  }

  // _setExchangeRate(primary, secondary) {
  //   this.ds.record.getRecord(`rates/${primary}${secondary}`).whenReady((xchangeRate) => {
  //     let rate = xchangeRate.get('rate');
  //     const change = _.extend({}, this.state);
  //     change.exchangeRate = rate;
  //     this.setState(change);
  //   });
  // }
  
// refactor to pass nextState instead of referencing state
  _getChartData(per) {
    // if (this._chartData) {
    //   this._chartData.discard();
    // }
    const pair = this.state.primaryCurrency + this.state.secondaryCurrency + '';

    this._chartData = this.ds.record.getRecord(`chartData/${pair}${per}`).whenReady((data) => {
      console.log('chart1', data.get())
      let chartdata = data.get()
      let change = _.extend({}, this.state);
      console.log('update', chartdata);
      change.chartData = chartdata.data;
      this.setState(change);
    })

    // this.chartData.subscribe('data', (newData) => {
    //   console.log('chartUp', newData)
    //   let change = _.extend({}, this.state);
    //   change.chartData = newData;
    //   this.setState(change);
    // })
  }

  _setCurrency(e, primary, secondary) {
    e.preventDefault;
    const change = _.extend({}, this.state);
    change.primaryCurrency = primary;
    change.secondaryCurrency = secondary;
    this.setState(change);
  }

  _selectPeriod(e) {
    let periods = [
      ['5m'],
      ['15m'],
      ['30m'],
      ['1h'],
      ['2h']
    ]
    const change = _.extend({}, this.state);
    change.periodDur = periods[e.target.value];
    this.setState(change);
  }

  changeRoute(route) {
    this.props.router.push(route);
  }

  render() {
    return (
        <div>
          <Nav 
            deep={this.props.deep}
            currencySelector={this._setCurrency.bind(this)}
            toRoute={this.changeRoute.bind(this)} 
          />
          <ExchangeRates 
            primaryCurrency={this.state.primaryCurrency}
            secondaryCurrency={this.state.secondaryCurrency}
            perLow={this.state.perLow}
            perHigh={this.state.perHigh}
          />
            }
          <div className='row content'>
            <div className='left-column'>
              <Transaction
                userData={this.props.userData}
                primaryCurrency={this.state.primaryCurrency}
                secondaryCurrency={this.state.secondaryCurrency}
                primaryBalance={this.state.userBalances[this.state.primaryCurrency]}
                secondaryBalance={this.state.userBalances[this.state.secondaryCurrency]}
                deep={this.props.deep}
              />
               <History userID={this.props.userData.userID} deep={this.props.deep} />
            </div>
            <div className='center-column'>
              <div className='graphWrapper'>
                <GraphWrapper data={this.state.chartData} />
              </div>
                <GraphControls selectPeriod={this._selectPeriod.bind(this)} />
            </div>
            <div className='right-column'>
              <TrollBox
                userData={this.props.userData}
                deep={this.props.deep}
              />

            </div>
          </div>
          <div className='footer'>
          </div>
        </div>
      )
  }

}

export default Dashboard;

