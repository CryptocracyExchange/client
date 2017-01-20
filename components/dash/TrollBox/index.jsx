import React from 'react';
import MessageList from './MessageList.jsx'

class TrollBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: props.userData.userID,
      chatMessages: [],
      userMessage: ''
    };

    this.handleChatInput = this.handleChatInput.bind(this);
    this.handleChatSubmit = this.handleChatSubmit.bind(this);
  }
  
  componentDidMount() {
    this.props.deep.event.subscribe('trollbox-create-message', (messageData) => {
      const messages = this.state.chatMessages.slice();
      messages.unshift({userID: messageData.userID, content: messageData.content, time: messageData.time});
      this.setState({chatMessages: messages});
    });
  }

  componentWillUnmount() {
    this.props.deep.event.unsubscribe('trollbox-create-message');
  }
  

  handleChatInput(e) {
    this.setState({userMessage: e.target.value});
  }

  handleChatSubmit(e) {
    e.preventDefault();
    if (this.state.userMessage.length > 0) {
      const time = Date.now();
      this.props.deep.event.emit('trollbox-create-message', {
        userID:  this.props.userData.userID, 
        content: this.state.userMessage,
        time: time
      });
      this.setState({userMessage: ''});
    }
  }

  render() {
    return (
      <div className='trollbox'>
        <div className='header'>
          Troll Box
        </div>
        <div className='messages-container'>
          <MessageList chatMessages={this.state.chatMessages} />
        </div>
        <div className='message-input'>
        <form onSubmit={this.handleChatSubmit}>
          <input 
            id="message-input"
            autoComplete="off"
            onChange={this.handleChatInput}
            value={this.state.userMessage}
          />
          <div className='trollBtn' onClick={this.handleChatSubmit}>Send</div>
        </form>
        </div>
      </div>
    )
  }
}

TrollBox.propTypes = {
  userData: React.PropTypes.object.isRequired,
  deep: React.PropTypes.object.isRequired
}

export default TrollBox;
