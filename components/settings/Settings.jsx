import React from 'react';
import Nav from './Nav.jsx';
import Addresses from './Addresses.jsx';
import Transfers from './Transfers.jsx';

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  changeRoute(route) {
    this.props.router.push(route)
  }

  render() {
    return (
      <div className="settings">
        <Nav toRoute={this.changeRoute.bind(this)}/>
      Settings
        <Addresses deep={this.props.deep} userID={this.props.userData.userID} />
        <Transfers deep={this.props.deep} userID={this.props.userData.userID} />
      </div>
      )
  }
}

export default Settings;
