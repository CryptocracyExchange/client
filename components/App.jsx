import React from 'react';
import ReactDOM from 'react-dom';
// const url = process.env.NODE_ENV === 'prod' ? 'deepstream' : 'localhost';
// const url = '192.241.227.176'; // Need to change to production IP/URL when deploying
const url = 'localhost'; // Need to change to production IP/URL when deploying
const client = window.deepstream(`${url}:6020`);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    }
  }
  
  getUserData(data) {
    this.setState({data: data})
  }

  checkAuth() {
    const connectionState = client.getConnectionState();
    if (connectionState !== 'OPEN') { // Test to see if this is the correct constant.
      const userJWT = window.localStorage.cryptocracy;
      if (userJWT) {
        client.login({
          role: 'user',
          jwt: userJWT
        }, (success, data) => {
          console.log(this.props);
          if (success) {
            this.getUserData(data);
            this.props.router.push('/dashboard');
          } else {
            this.props.router.push('/');
          }
        });
      }
    }
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        checkAuth: this.checkAuth.bind(this),
        deep: client,
        getUserData: this.getUserData.bind(this),
        userData: this.state.data
      })
    );

    return (
      <div>
        {childrenWithProps}
      </div>
    );
  }
}

export default App;
