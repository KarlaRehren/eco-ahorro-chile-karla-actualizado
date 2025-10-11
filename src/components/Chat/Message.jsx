import React from 'react';
import { formatText } from '../../utils/database';
import styles from './Message.module.css';

const Message = ({ text, sender }) => {
  const messageClass = sender === 'user' ? styles.userMessage : styles.botMessage;
  
  return (
    <div className={`${styles.message} ${messageClass}`}>
      <div 
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: formatText(text) }} 
      />
    </div>
  );
};

export default Message;