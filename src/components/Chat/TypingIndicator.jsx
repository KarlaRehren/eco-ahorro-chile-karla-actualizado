import React from 'react';
import styles from './TypingIndicator.module.css';

const TypingIndicator = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.typingIndicator}>
      <span className={styles.typingText}>El asistente está escribiendo...</span>
      <div className={styles.typingDots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
};

export default TypingIndicator;