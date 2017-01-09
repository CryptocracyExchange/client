import React from 'react';


class ExchangeRates extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="exchangeBar">
      <h4>{`${this.props.currencies[0]}/${this.props.currencies[1]}`}</h4>
      </div>
      )
  }
}

export default ExchangeRates;
