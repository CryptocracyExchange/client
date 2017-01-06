import React from 'react';
import ReactDOM from 'react-dom';
const deepstream = require('deepstream.io-client-js');

class App extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        deepstream: deepstream
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
