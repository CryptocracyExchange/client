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
      <img src='/img/whiteCrypt.svg' className='landingBanner'></img>
      </div>
      )
  }
}

export default Landing;
