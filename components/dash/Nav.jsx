import React from 'react';


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('nav props', this.props.deepstream);
  }

  render() {
    return (
      <div className="navBar">
      <h1>  
        Cryptocracy
      </h1>
      </div>
      )
  }
}

export default Nav;
