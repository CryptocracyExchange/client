import React from 'react';
import request from 'superagent';
import { Router, Route, browserHistory } from 'react-router';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      correct: true
    }
    this.submitHandler = this.submitHandler.bind(this);
    this.signUpclickHandler = this.signUpclickHandler.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateUsername(e) {
    this.setState({
      username: e.target.value,
      correct: true
    });
  }

  updatePassword(e) {
    this.setState({
      password: e.target.value,
      correct: true
    });
  }  

  submitHandler(e) {
    e.preventDefault();
    //sign in
    this.props.deep.login({
      role: 'user',
      username: this.state.username,
      password: this.state.password
    }, (success, data) => {
      if (success) {
        window.localStorage.setItem('cryptocracy', data.token);
        window.localStorage.setItem('cryptocracyuserID', data.userID);
        this.props.router.push('/dashboard');
      } else {
        this.setState({
          username: '',
          password: '',
          correct: false
        })
      }
    });
  }

  signUpclickHandler(e) {
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
                <div className='login-container'>
                  <input id='login-input' type="text" value={this.state.username} onChange={(e) => this.updateUsername(e)} placeholder="username" name="name" />
                </div>
                <br /><br />
                <div className='login-container'>
                  <input id='login-input' type="password" value={this.state.password} onChange={(e) => this.updatePassword(e)} placeholder="password" name="name" />
                </div>
              </label>
              <br /><br />
              {!this.state.correct && this.state.username.length === 0 && this.state.password.length === 0 && <p>Invalid login</p>}
              <input id='inputBtn' type="submit" onClick={(e) => this.submitHandler(e)} value="Log In" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input id='inputBtn' type="submit" onClick={(e) => this.signUpclickHandler(e)} value='Sign Up' />
            </form>
          </div>
        </div>
      )
  }
}

export default Landing;
