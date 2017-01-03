import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('its alive');
  }


  render() {
    return (
      <div>
      Hello, World!
      </div>
      )
  }
}

export default Landing;
