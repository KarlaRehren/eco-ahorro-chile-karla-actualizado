import React, { useState } from 'react';
import styles from '../../styles/components/InputSection.module.css';

const InputSection = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className={styles.inputSection}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe tu mensaje aquí..."
          maxLength={500}
        />
        <div className={styles.charCounter}>
          {message.length}/500
        </div>
        <button
          type="button"
          className={styles.sendButton}
          onClick={handleSubmit}
          disabled={!message.trim()}
          title="Enviar mensaje"
        >
          <span className={styles.sendIcon}>➤</span>
        </button>
      </div>
    </div>
  );
};

export default InputSection;