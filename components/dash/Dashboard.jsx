import React from 'react';
import Nav from './Nav.jsx';
import ExchangeRates from './ExchangeRates.jsx';
import Transaction from './Transaction.jsx';
import Graph from './Graph.jsx';
import History from './History.jsx';
import d3 from 'd3';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('dash', this.props);
  }

  changeRoute(route) {
    this.props.router.push(route)
  }

  render() {
    return (
      <div>
        <Nav toRoute={this.changeRoute.bind(this)} />
        <ExchangeRates />
        <Transaction />
        <History />
        <Graph />
      </div>
      )
  }
}

export default Dashboard;
