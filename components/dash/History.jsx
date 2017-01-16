import React from 'react';
import { Row, Tabs, Tab, Button, Input, Table } from 'react-materialize';
import _ from 'lodash';

const TableHeader = () => (
  <thead>
    <tr>
      <th data-field="type">Buy/Sell</th>
      <th data-field="amount">Qty</th>
      <th data-field="price">Price</th>
      <th data-field="total">Total</th>
    </tr>
  </thead>
);

const TableRows = (props) => {
  return (
    <tbody>
      {Object.keys(props.orders).map((orderID, key) => {
        return (
          <tr key={key}>
            <td>{props.orders[orderID].type}</td>
            <td>{props.orders[orderID].amount}</td>
            <td>{props.orders[orderID].price}</td>
            <td>{props.orders[orderID].price * props.orders[orderID].amount}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

TableRows.propTypes = {
  orders: React.PropTypes.object.isRequired
};

const OrderTable = (props) => (
  <div>
    <Row>
      <Table className='responsive striped'>
        <TableHeader />
        <TableRows orders={props.orders} />
      </Table>
    </Row>
  </div>
);

OrderTable.propTypes = {
  orders: React.PropTypes.object.isRequired
};

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: props.userID,
      closedOrders: {},
      openOrders: {}
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
  }

  componentDidMount() {
    this.userClosedRecordIDs.subscribe((transactionIDs) => {
      transactionIDs.forEach((transactionID) => {
        // If state does not currently have the transactionID
        if (!this.state.closedOrders.hasOwnProperty(transactionID)) {
          this.props.deep.record.snapshot(`closed/${transactionID}`, (error, transactionData) => {
            // Build new transaction object
            const newTransaction = {};
            newTransaction[transactionID] = {
              amount: transactionData.amount,
              currency: transactionData.currency,
              type:transactionData.type,
              price: transactionData.price
            };
            // Add new transaction to state
            const change = _.extend(newTransaction, this.state.closedOrders);
            this.setState({closedOrders: change});
          });
        }
      });
    }, true);

    this.userOpenRecordIDs.subscribe((transactionIDs) => {
      transactionIDs.forEach((transactionID) => {
        // If state does not currently have the transactionID
        if (!this.state.openOrders.hasOwnProperty(transactionID)) {
          this.props.deep.record.snapshot(`open/${transactionID}`, (error, transactionData) => {
            // Build new transaction object
            const newTransaction = {};
            newTransaction[transactionID] = {
              amount: transactionData.amount,
              currency: transactionData.currency,
              type:transactionData.type,
              price: transactionData.price
            };
            // Add new transaction to state
            const change = _.extend(newTransaction, this.state.openOrders);
            this.setState({openOrders: change});
          });
        }
      });
    }, true);
  }

  componentWillUnmount() {
    this.userClosedRecordIDs.discard();
    this.userOpenRecordIDs.discard();
  }

  render() {
    return (
      <div className="history">
        <div className='header'>
            Orders
        </div>
        <Tabs className=''>
          <Tab id='open' title="Open" active >
            <div className='tableWrapper'>
              <OrderTable orders={this.state.openOrders} />
            </div>
          </Tab>
          <Tab id='closed' title="Closed" >
          <div className='tableWrapper'>
            <OrderTable orders={this.state.closedOrders} />
          </div>
          </Tab>
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
