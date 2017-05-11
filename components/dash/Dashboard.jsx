import React from 'react';
import Nav from './Nav.jsx';
import ExchangeRates from './ExchangeRates.jsx';
import Transaction from './Transaction.jsx';
import GraphWrapper from './GraphWrapper.jsx';
import GraphControls from './GraphControls.jsx';
import History from './History.jsx';
import TrollBox from './TrollBox/index.jsx';
import _ from 'lodash';
import { Row, Col, Modal, Button } from 'react-materialize';
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
      perOpen: null,
      perClose: null,
      exchangeRate: null
    }
    // console.log(window.localStorage.getItem('cryptocracyuserID'))
    this.ds = props.deep;
    this.userData = this.props.userData;
    this.userID = window.localStorage.getItem('cryptocracyuserID');

    this._chartData;
    this._exchangeRate;
    this.balances = this.ds.record.getRecord(`balances/${this.userID}`)
    
    this.ds.event.subscribe('histData', (data) => {
      const change = _.extend({}, this.state);
      change.chartData = data;
      this.setState(change);
    })
  }

  componentDidMount() {
    // get chart data
    this._getChartData('5m') // replace with default
    this._getExchangeRate('BTC', 'LTC');
    // get user balances
    this.balances.whenReady((record) => {
      const change = _.extend({}, this.state);
      change.userBalances = record.get();
      this.setState(change);
    });
    // subscribe to balance changes
    this.balances.subscribe((data) => {
      const change = _.extend({}, this.state);
      change.userBalances = data;
      this.setState(change);
    });
    //notification for closed orders
    this.ds.event.subscribe('closedSale', (data) => {
      if (data.userID === this.userID) {
        Materialize.toast('Success! An order was filled!', 4000);
      }
    })
  }

  componentWillUnmount() {
    this.balances.discard();
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.primaryCurrency !== nextState.primaryCurrency || this.state.secondaryCurrency !== nextState.secondaryCurrency || this.state.periodDur !== nextState.periodDur) {
      this._getExchangeRate(nextState.primaryCurrency, nextState.secondaryCurrency);
      setTimeout(() => {
        this._getChartData(nextState.periodDur);
      }, 200);
    }
  }

  _getExchangeRate(primary, secondary) {
    const newPair = `rates/${primary}${secondary}`;
    this._exchangeRate = this.ds.record.snapshot(newPair, (err, data) => {
      if (err) {
        console.log(err)
      }
      const change = _.extend({}, this.state);
      change.exchangeRate = data.rate;
      this.setState(change);
    });
  }

  _getChartData(per) {
    const pair = this.state.primaryCurrency + this.state.secondaryCurrency + '';
    this._chartData = this.ds.record.getRecord(`chartData/${pair}${per}`).whenReady((data) => {
      let chartdata = data.get()
      let change = _.extend({}, this.state);
      change.chartData = chartdata.data;
      change.perHigh = chartdata.data[chartdata.data.length - 1].high;
      change.perLow = chartdata.data[chartdata.data.length - 1].low;
      change.perOpen = chartdata.data[chartdata.data.length - 1].open;
      change.perClose = chartdata.data[chartdata.data.length - 1].close;
      this.setState(change);
    })
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
            periodDur={this.state.periodDur}
            exchangeRate={this.state.exchangeRate}
            perOpen={this.state.perOpen}
            perClose={this.state.perClose}
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
               <History userID={this.userID} deep={this.props.deep} />
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
            <Modal
            fixedFooter
              trigger={
                <div className='aboutBtn'>
                  About
                </div>
              }
              actions={[<Button modal='close' flat>Close</Button>]}
              >

              <h3>About Cryptocracy</h3>
              Cryptocracy is an exploration in performance, stability and scalability.
              <ul style={{textAlign:'center'}}>
                <li>React</li>
                <li>deepstream.io</li>
                <li>rethinkDB</li>
                <li>redis</li>
                <li>Node/Express</li>
              </ul>
              As you can see, this is a demo. Real trades are being generated (by bot managed dummy users). The option to transfer funds from an external wallet are disabled for obvious reasons.  <br/>
              <span>Cryptocracy was made by:</span>
              <ul style={{textAlign:'center'}}>
                <li>Kai Hsia -- <a href='https://github.com/kaihsia' target='_blank'>Github</a></li>
                <li>Matt Goldwater -- <a href='https://github.com/MJGwater' target='_blank'>Github</a></li>
                <li>Harry Bellenie -- <a href='https://github.com/KN3LL2K' target='_blank'>Github</a></li>
                <li>Mikel Duffy -- <a href='https://github.com/mikelduffy' target='_blank'>Github</a></li>
              </ul>
              <span>Thank you!</span>
              </Modal>
          </div>
        </div>
      )
  }

}

export default Dashboard;
