import React from 'react';


class CreateUser extends React.Component {
  constructor(props) {
    super(props);
  
    
  }
  submitHandler(e) {
    e.preventDefault();
    this.props.router.push('/dashboard');
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.router.push('/');
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
              <input type="text" placeholder="username" name="name" />
              <br /><br />
              <input type="text" placeholder="password" name="name" />
              <br /><br />
              <input type="text" placeholder="confirm password" name="name" />
              <br /><br />
              <input type="text" placeholder="email" name="name" />
            </label>
            <br /><br />
            <input type="submit" value="Submit" />&nbsp;&nbsp;
            <button onClick={(e) => this.clickHandler(e)}> Cancel </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateUser;
