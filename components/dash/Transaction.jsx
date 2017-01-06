import React from 'react';


class Transaction extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('tr', this.props);
  }

  render() {
    return (
      <div className="transaction">
      Transaction
      </div>
      )
  }
}

export default Transaction;
