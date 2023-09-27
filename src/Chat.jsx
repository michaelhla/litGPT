import React from 'react';
import './Chat.css';

function Chat({ messages }) {
  return (
    <div className="Chat">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.role}`}>
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Chat;
