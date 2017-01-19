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
  
  componentWillMount() {
    const userJWT = window.localStorage.cryptocracy;
    if (userJWT) {
      this.props.checkAuth();
    }
  }

  submitHandler(e, success) {
    console.log('gets into submitHandler')
    e.preventDefault();
    if (success) {
      this.props.router.push('/');
    }
  }
/*
  clickHandler(e) {
    e.preventDefault();
    this.props.router.push('/');
  }*/

/*<button onClick={(e) => this.clickHandler(e)}> Cancel </button>*/

  updateFormInput(key) {
    var state = {};
    console.log('this is: ', this)
    return function(e) {
      this.updateErrorState();
      state[key] = e.target.value
      this.setState(
        state,
      )
    }.bind(this)
  }

  updateErrorState(){
    this.setState({
      error: false
    })
  }

  signUp(e) {
    console.log('in signUp function. event is: ', e)
    var username = this.state.username
    var password = this.state.password
    var email = this.state.email
    $.ajax({
      url: 'http://localhost:8999/signup',
      // url: 'http://localhost:3001/signup',
      method: 'POST',
      crossDomain: true,
      data: {
        username: username,
        password: password,
        email: email
      },
      success: (message) => {
        console.log('success message is:', message);
        this.setState({
          error: false
        })
        this.submitHandler(e, true)
      },
      error: (message) => {
        console.log('error message is:', message);
        this.setState({
          error: message.responseText
        })
        this.submitHandler(e, false)
      }
    })
  }

  render() {
    let passwordDoesNotMatchOrEmpty = this.state.password.length === 0 || this.state.password !== this.state.confirm
    let passwordDoesNotMatch = this.state.password !== this.state.confirm
    if (!this.props.dsConnected) {
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
                {console.log(this.state.username)}
                {console.log(this.state.password)}
                {console.log(this.state.confirm)}
                {console.log(this.state.email)}
                {console.log('this.state.error is: ', this.state.error)}
                <input type="text" onChange={this.updateFormInput('password')} placeholder="password" name="name" />
                <br /><br />
                <input type="text" onChange={this.updateFormInput('confirm')} placeholder="confirm password" name="name" />
                <br /><br />
                {passwordDoesNotMatch && <p>Passwords do not match</p>}
                <input type="text" onChange={this.updateFormInput('email')} placeholder="email" name="name" />
                {this.state.error === 'email is already taken' && <p>email is already taken</p>}
              </label>
              <br /><br />
              <input type="submit" onClick={this.signUp} value="Submit" disabled={passwordDoesNotMatchOrEmpty} />&nbsp;&nbsp;
            </form>
          </div>
        </div>
      )
    } else {
      return <div>Put a spinner in here</div>
    }
  }
}

export default CreateUser;
