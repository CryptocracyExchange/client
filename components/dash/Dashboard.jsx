import React from 'react';
import Nav from './Nav.jsx';
import ExchangeRates from './ExchangeRates.jsx';
import Transaction from './Transaction.jsx';
import Graph from './Graph.jsx';
import History from './History.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>
        <Nav />
        <ExchangeRates />
        <Transaction />
        <History />
        <Graph />
      </div>
      )
  }
}

export default Dashboard;
