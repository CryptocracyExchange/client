import React from 'react';
import { Row, Tabs, Tab, Button, Input, Table } from 'react-materialize';

class History extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    
  }

  render() {
  const openTable = (
    <div>
      <Row>
        <Table className='responsive striped'>
          <thead>
            <tr>
              <th data-field="type">Buy/Sell</th>
              <th data-field="amount">Qty</th>
              <th data-field="price">Price</th>
              <th data-field="total">Total</th>
            </tr>
          </thead>
      
          <tbody>
            <tr>
              <td>Sell</td>
              <td>2</td>
              <td>$2</td>
              <td>$4</td>
            </tr>
            <tr>
              <td>Buy</td>
              <td>1</td>
              <td>$25</td>
              <td>$0.87</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );

  const tableRow = (
          <tr>
            <td>Buy</td>
            <td>2</td>
            <td>$50</td>
            <td>$100</td>
          </tr>
    )

  const closedTable = (
  <div>
      <Row>
      <Table className='responsive striped'>
        <thead>
          <tr>
            <th data-field="type">Buy/Sell</th>
            <th data-field="amount">Qty</th>
            <th data-field="price">Price</th>
            <th data-field="total">Total</th>
          </tr>
        </thead>
    
        <tbody>
            <tr>
            <td>Buy</td>
            <td>2</td>
            <td>$50</td>
            <td>$100</td>
          </tr>
           <tr>
            <td>Sell</td>
            <td>2</td>
            <td>$25</td>
            <td>$50</td>
          </tr>
        </tbody>
      </Table>
    </Row>
  </div>
    );
    return (
      <div className="history">
          <Tabs className=''>
            <Tab id='open' title="Open" active >{openTable}</Tab>
            <Tab id='closed' title="Closed" >{closedTable}</Tab>
          </Tabs>
      </div>
      )
  }
}

export default History;
