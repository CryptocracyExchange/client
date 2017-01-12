import React from 'react';
import { Row, Tabs, Tab, Button, Input, Table } from 'react-materialize';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: props.userID,
      closedOrders: [],
      openOrders: []
    }

    const queryStringClosed = JSON.stringify({
      table: 'closed',
      query: [
        ['userID', 'eq', props.userID]
      ]
    });

    const queryStringOpen = JSON.stringify({
      table: 'open',
      query: [
        ['userID', 'eq', props.userID]
      ]
    });

    this.userClosedRecordIDs = props.deep.record.getList('search?' + queryStringClosed);
    this.userOpenRecordIDs = props.deep.record.getList('search?' + queryStringOpen);
    this.handleUnsubscribe = this.handleUnsubscribe.bind(this);
  }



  componentDidMount() {
    this.userClosedRecordIDs.subscribe((transactionIDs) => {
      console.log('Closed', transactionIDs);
      transactionIDs.forEach((transactionID) => {
        this.props.deep.record.snapshot(transactionRecordID, (transactionData) => {
          this.setState({
            closedOrders: closedOrders.concat([{
              amount: transactionData.amount,
              currency: transactionData.currency,
              type:transactionData.type,
              price: transactionData.price
            }])
          });
        });
      })
    }, true);

    this.userOpenRecordIDs.subscribe((transactionIDs) => {
      console.log('Open', transactionIDs);
      transactionIDs.forEach((transactionID) => {
        this.props.deep.record.snapshot(transactionRecordID, (transactionData) => {
          this.setState({
            closedOrders: closedOrders.concat([{
              amount: transactionData.amount,
              currency: transactionData.currency,
              type:transactionData.type,
              price: transactionData.price
            }])
          });
        });
      })
    }, true);
  }

  componentWillUnmount() {
    this.userClosedRecordIDs.discard();
    this.userOpenRecordIDs.discard();
  }
  
  handleUnsubscribe() {
    this.userClosedRecordIDs.discard();
    this.userOpenRecordIDs.discard();
    console.log('Search Records Discarded');
  }

  render() {
    // TODO: refactor these components into a single component that takes props
    const tableHeader = (
      <thead>
        <tr>
          <th data-field="type">Buy/Sell</th>
          <th data-field="amount">Qty</th>
          <th data-field="price">Price</th>
          <th data-field="total">Total</th>
        </tr>
      </thead>
    );

    const openTable = (
      <div>
        <Row>
          <Table className='responsive striped'>
            {tableHeader}
            <tbody>
              {this.state.openOrders.map((order) => {
                return (
                  <tr>
                    <td>{order.type}</td>
                    <td>{order.amount}</td>
                    <td>{order.price}</td>
                    <td>{order.price * order.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </div>
    );

    const closedTable = (
      <div>
          <Row>
          <Table className='responsive striped'>
            {tableHeader}
            <tbody>
              {this.state.closedOrders.map((order) => {
                return (
                  <tr>
                    <td>{order.type}</td>
                    <td>{order.amount}</td>
                    <td>{order.price}</td>
                    <td>{order.price * order.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Row>
      </div>
    );

    return (
      <div className="history">
        <Button onClick={this.handleUnsubscribe}>Unsubscribe from searchs</Button>
        <Tabs className=''>
          <Tab id='open' title="Open" active >{openTable}</Tab>
          <Tab id='closed' title="Closed" >{closedTable}</Tab>
        </Tabs>
      </div>
      )
  }
}

History.propTypes = {
  userID: React.PropTypes.string.isRequired,
  deep: React.PropTypes.object.isRequired
};

export default History;
