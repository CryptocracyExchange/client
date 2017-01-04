import React from 'react';
import request from 'superagent';
import { Router, Route, browserHistory } from 'react-router';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('its alive', this.props);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.router.push('/dashboard');
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
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      )
  }
}

export default Landing;
