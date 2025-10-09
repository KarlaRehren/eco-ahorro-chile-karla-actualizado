import React from 'react';
import { formatText } from '../../utils/database';

const Message = ({ text, sender }) => {
  return (
    <div className={`message ${sender}-message`}>
      <div dangerouslySetInnerHTML={{ __html: formatText(text) }} />
    </div>
  );
};

export default Message;