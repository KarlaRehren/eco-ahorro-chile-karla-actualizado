import React, { useEffect, useRef } from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

const ChatArea = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="chat-area">
      <div className="messages">
        {messages.map((message, index) => (
          <Message
            key={index}
            text={message.text}
            sender={message.sender}
          />
        ))}
        <TypingIndicator isVisible={isTyping} />
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatArea;