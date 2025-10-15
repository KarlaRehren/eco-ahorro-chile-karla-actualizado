import React, { useEffect, useRef } from 'react';
import styles from '../styles/ChatArea.module.css';

const ChatArea = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const formatText = (text) => {
    return text.replace(/\n/g, '<br>');
  };

  return (
    <div className={styles.chatArea}>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`${styles.message} ${message.sender === 'user' ? styles.userMessage : styles.botMessage}`}
          >
            <div 
              className={styles.messageContent}
              dangerouslySetInnerHTML={{ __html: formatText(message.text) }}
            />
          </div>
        ))}
        {isTyping && (
          <div className={`${styles.message} ${styles.botMessage}`}>
            <div className={styles.typingIndicator}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatArea;