import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    let test = ['a', 'b'];
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       deepstream: test
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
