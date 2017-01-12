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
    //setstate
    this.setState({data: data})
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
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
