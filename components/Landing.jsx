import React from 'react';
import request from 'superagent';
import { Router, Route, browserHistory } from 'react-router';


let options = {
  userID: '00',
  currency: 'BTC'
}

class Landing extends React.Component {
  constructor(props) {
    super(props);

 
    
  }


  componentDidMount() {
    const url = 'localhost:6020';
    const deepstream = this.props.deepstream;
    const client = deepstream(url).login();
    console.log('its alive', this.props, client.event.emit('checkBalance', options));
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.router.push('/dashboard');
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.router.push('/signup');
  }


  render() {
    return (
      <div className='landing'>
        <div>
        <img src='/img/whiteCrypt.svg' className='landingBanner'></img>
        </div>
        <div className='loginForm'>
          <form onSubmit={(e) => this.submitHandler(e)}>
            <label>
              <input type="text" placeholder="username" name="name" />
              <br /><br />
              <input type="text" placeholder="password" name="name" />
            </label>
            <br /><br />
            <input type="submit" value="Log In" />&nbsp;&nbsp;
            <button onClick={(e) => this.clickHandler(e)}> Sign Up </button>
          </form>
        </div>
      </div>
      )
  }
}

export default Landing;
