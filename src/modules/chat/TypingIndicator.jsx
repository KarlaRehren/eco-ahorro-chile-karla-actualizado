import React from 'react';

const TypingIndicator = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="typing-indicator">
      <span>El asistente está escribiendo...</span>
      <div className="typing-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default TypingIndicator;