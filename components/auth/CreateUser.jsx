import React from 'react';
import $ from 'jquery';

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm: '',
      email: ''
    }
    this.updateFormInput = this.updateFormInput.bind(this);
    this.signUp = this.signUp.bind(this);
  }
  submitHandler(e) {
    e.preventDefault();
    this.props.router.push('/');
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.router.push('/');
  }

/*<button onClick={(e) => this.clickHandler(e)}> Cancel </button>*/

  updateFormInput(key) {
    var state = {};
    console.log('this is: ', this)
    return function(e) {
      state[key] = e.target.value
      this.setState(
        state
      )
    }.bind(this)
  }

  signUp(e) {
    console.log('in signUp function. event is: ', e)
    var username = this.state.username
    var password = this.state.password
    var email = this.state.email
    $.ajax({
      url: 'http://localhost:8999/signup',
      method: 'POST',
      data: {
        username: username,
        password: password,
        email: email
      },
      success: (message) => {
        console.log('success message is:', message);
      },
      error: (message) => {
        console.log('error message is:', message);
      }
    })
  }


  render() {
    return (
      <div className='createUser'>
        <div>
        <img src='/img/grnCrypt.svg' className='createUserBanner'></img>
        </div>
        <div className='loginForm'>
          <form onSubmit={(e) => this.submitHandler(e)}>
            <label>
              <input type="text" onChange={this.updateFormInput('username')} placeholder="username" name="name" />
              <br /><br />
              {console.log(this.state.username)}
              {console.log(this.state.password)}
              {console.log(this.state.confirm)}
              {console.log(this.state.email)}
              <input type="text" onChange={this.updateFormInput('password')} placeholder="password" name="name" />
              <br /><br />
              <input type="text" onChange={this.updateFormInput('confirm')} placeholder="confirm password" name="name" />
              <br /><br />
              <input type="text" onChange={this.updateFormInput('email')} placeholder="email" name="name" />
            </label>
            <br /><br />
            <input type="submit" onClick={this.signUp} value="Submit" />&nbsp;&nbsp;
          </form>
        </div>
      </div>
    )
  }
}

export default CreateUser;
