import React from 'react';
import { Row, Tabs, Tab, Button, Input, Table } from 'react-materialize';

class History extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
  const openTable = (
    <div>
      <Row>
        <Table>
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
              <td>Alvin</td>
              <td>Eclair</td>
              <td>$0.87</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
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
      <Table>
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
            <td>Fred </td>
            <td>Eclair</td>
            <td>$0.87</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
            <td>$0.87</td>
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
