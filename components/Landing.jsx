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

  submitHandler(e) {
    e.preventDefault();
    //sign in
    this.props.deep.login({}, (success, data) => {
      if (success) {
        data = {userID: 'kai'};
        this.props.getUserData(data);
        this.props.router.push('/dashboard');
      } else {
        console.log('incorrect login')
      }
    });
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
