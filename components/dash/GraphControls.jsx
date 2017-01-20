import React from 'react';
import { Row, Input, Col } from 'react-materialize';

class GraphControls extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }


  render() {
    return (
    <div className='graphcontrols'>
      <span>Period:</span>
      <Row>
        <Input onChange={(e) => this.props.selectPeriod(e)} name='group1' type='radio' value={0} label='5m' className='with-gap' />
        <Input onChange={(e) => this.props.selectPeriod(e)} name='group1' type='radio' value={1} label='15m' className='with-gap' />
        <Input onChange={(e) => this.props.selectPeriod(e)} name='group1' type='radio' value={2} label='30m' className='with-gap' />
        <Input onChange={(e) => this.props.selectPeriod(e)} name='group1' type='radio' value={3} label='1h' className='with-gap' />
        <Input onChange={(e) => this.props.selectPeriod(e)} name='group1' type='radio' value={4} label='2h' className='with-gap' />
      </Row>
    </div>
    )
  }
}


export default GraphControls;
