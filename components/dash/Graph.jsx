import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const ticks = [
  "Q1", "Q2", 'Q3', 'Q4'
]


class Graph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="graph">
      </div>
      )
  }
}



export default Graph;
