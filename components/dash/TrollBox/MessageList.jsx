import React from 'react';
import moment from 'moment';

const MessageList = (props) => {
  return (
    <ul>
      {props.chatMessages.map((chat, key) => {
        return (
          <li key={key}>
            <span className='message-time'>[{moment(chat.time).format('h:mm')}] </span>
            <span className='message-userid'> {chat.userID}: </span>
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

export default MessageList;
