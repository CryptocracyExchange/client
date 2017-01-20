import React from 'react';
import $ from 'jquery';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm: '',
      email: '',
      error: false
    }
    this.updateFormInput = this.updateFormInput.bind(this);
    this.updateErrorState = this.updateErrorState.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  submitHandler(e, success) {
    if (success) {
      this.props.router.push('/');
      this.props.deep.event.emit('initBalance', {userID: this.state.username});
    }
  };

  updateFormInput(key) {
    var state = {};
    return function(e) {
      this.updateErrorState();
      state[key] = e.target.value
      this.setState(
        state,
      )
    }.bind(this)
  };

  updateErrorState(){
    this.setState({
      error: false
    })
  };

  signUp(e) {
    const username = this.state.username
    const password = this.state.password
    const email = this.state.email
    $.ajax({
      url: 'http://localhost:8999/signup',
      method: 'POST',
      crossDomain: true,
      data: {
        username: username,
        password: password,
        email: email
      },
      success: (message) => {
        this.setState({
          error: false
        })
        this.submitHandler(e, true)
      },
      error: (message) => {
        this.setState({
          error: message.responseText
        })
        this.submitHandler(e, false)
      }
    })
  };

  render() {
    let passwordDoesNotMatchOrEmpty = this.state.password.length === 0 || this.state.password !== this.state.confirm
    let passwordDoesNotMatch = this.state.password !== this.state.confirm
    return (
      <div className='createUser'>
        <div>
        <img src='/img/grnCrypt.svg' className='createUserBanner'></img>
        </div>
        <div className='loginForm'>
          <form onSubmit={(e) => this.submitHandler(e)}>
            <label>
              <input type="text" onChange={this.updateFormInput('username')} placeholder="username" name="name" />
              {this.state.error === 'username is already taken' && <p>username is already taken</p>}
              <br /><br />
              <input type="password" onChange={this.updateFormInput('password')} placeholder="password" name="name" />
              <br /><br />
              <input type="password" onChange={this.updateFormInput('confirm')} placeholder="confirm password" name="name" />
              <br /><br />
              {passwordDoesNotMatch && <p>Passwords do not match</p>}
              <input type="email" onChange={this.updateFormInput('email')} placeholder="email" name="name" />
              {this.state.error === 'email is already taken' && <p>email is already taken</p>}
            </label>
            <br /><br />
            <input type="submit" onClick={this.signUp} value="Submit" disabled={passwordDoesNotMatchOrEmpty} />&nbsp;&nbsp;
          </form>
        </div>
      </div>
    )
  };
};

export default CreateUser;
