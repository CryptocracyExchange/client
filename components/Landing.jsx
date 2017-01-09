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
    this.state = {
      username: '',
      password: ''
    }
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(key) {
    let state = {}
    return function(e) {
      state[key] = e.target.value;
      this.setState(
        state
      )
    }.bind(this)
  } 

  submitHandler(e) {
    e.preventDefault();
    //sign in
    this.props.deep.login({
      role: 'user',
      username: this.state.username,
      password: this.state.password
    }, (success, data) => {
      console.log('success is: ', success, 'data is: ', data);
      if (success) {
        // data = {userID: 'kai'};
        data = data;
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
              <input type="text" onChange={this.updateInput('username')} placeholder="username" name="name" />
              <br /><br />
              <input type="text" onChange={this.updateInput('password')} placeholder="password" name="name" />
            </label>
            <br /><br />
            {console.log(this.state.username)}
            {console.log(this.state.password)}
            <input type="submit" value="Log In" />&nbsp;&nbsp;
            <button onClick={(e) => this.clickHandler(e)}> Sign Up </button>
          </form>
        </div>
      </div>
      )
  }
}

export default Landing;
