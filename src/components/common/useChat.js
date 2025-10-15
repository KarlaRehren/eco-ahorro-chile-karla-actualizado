import { useState, useCallback } from 'react';
import { getResponse } from './database';
import { TYPING_DELAY } from './index';

// Hook personalizado para manejar el chat
export const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = useCallback((text, sender) => {
    setMessages(prev => [...prev, { text, sender, id: Date.now() }]);
  }, []);

  const processQuery = useCallback((query) => {
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const responses = getResponse(query);
      
      if (responses === 'modal') {
        return 'modal';
      } else {
        const responseArray = Array.isArray(responses) ? responses : [responses];
        responseArray.forEach(response => {
          addMessage(response, 'bot');
        });
        return 'processed';
      }
    }, TYPING_DELAY.MIN + Math.random() * (TYPING_DELAY.MAX - TYPING_DELAY.MIN));
  }, [addMessage]);

  const sendMessage = useCallback((message) => {
    addMessage(message, 'user');
    return processQuery(message);
  }, [addMessage, processQuery]);

  return {
    messages,
    isTyping,
    addMessage,
    sendMessage,
    processQuery
  };
};