import React from 'react';
import Nav from './Nav.jsx';

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
      </div>
      )
  }
}

export default Settings;
