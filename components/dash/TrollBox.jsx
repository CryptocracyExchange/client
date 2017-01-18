import React from 'react';

const MessageList = (props) => {
  return (
    <ul>
      {props.chatMessages.map((chat, key) => {
        console.log(chat);
        return (
          <li key={key}>
            <span className='message-userid'>{chat.userID}: </span>
            <span className='message-content'>{chat.content}</span>
          </li>
        )
      })}
    </ul>
  );
};

MessageList.propTypes = {
  chatMessages: React.PropTypes.array.isRequired
}

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
    this.props.deep.record
      .getList('trollbox-messages')
      .subscribe((messageList) => {
        const messages = [];
        messageList.forEach((messageID) => {
          this.props.deep.record.snapshot(messageID, (err, messageData) => {
            messages.push({userID: messageData.userID, content: messageData.content});
          })
        })
        this.setState({chatMessages: messages});
      }, false);
  }
  

  handleChatInput(e) {
    this.setState({userMessage: e.target.value});
  }

  handleChatSubmit(e) {
    if (this.state.userMessage.length > 0) {
      this.props.deep.event.emit('trollbox-create-message', {userID: this.state.userID, content: this.state.userMessage});
      this.setState({userMessage: ''});
    }
  }

  render() {
    return (
      <div className='trollbox'>
        <div className='header'>
          Troll Box
        </div>
        <br />
        <br />
        <div className='messages-container'>
          <MessageList chatMessages={this.state.chatMessages} />
        </div>
        <br />
        <br />
        <div className='message-input'>
          <input 
            id="message-input"
            autoComplete="off"
            onChange={this.handleChatInput}
          />
          <button onClick={this.handleChatSubmit}>Send</button>
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
