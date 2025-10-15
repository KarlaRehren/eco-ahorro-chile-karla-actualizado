import { useState, useCallback, useEffect } from 'react';
import { getResponse } from './database';
import { TYPING_DELAY } from './index';

// Hook consolidado para manejar toda la lógica del chatbot
export const useChatbotHandlers = () => {
  // Estado del chat
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  
  // Estado del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funciones del chat
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

  // Funciones del modal
  const openModal = useCallback(() => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const toggleModal = useCallback(() => {
    isModalOpen ? closeModal() : openModal();
  }, [isModalOpen, closeModal, openModal]);

  // Handlers combinados para el chatbot
  const handleSendMessage = useCallback((message) => {
    const result = sendMessage(message);
    if (result === 'modal') {
      openModal();
    }
  }, [sendMessage, openModal]);

  const handleButtonClick = useCallback((buttonText, query) => {
    addMessage(buttonText, 'user');
    const result = processQuery(query);
    if (result === 'modal') {
      openModal();
    }
  }, [addMessage, processQuery, openModal]);

  const handleConsultaSubmit = useCallback((formData) => {
    addMessage(`Consulta gratuita de ${formData.nombre}`, 'user');
    
    setTimeout(() => {
      const confirmationMessage = 
        `✅ **¡Consulta enviada exitosamente!**<br><br>` +
        `Hola <strong>${formData.nombre}</strong>, tu consulta ha sido recibida.<br><br>` +
        `📧 <strong>Email:</strong> ${formData.email}<br>` +
        `🕐 <strong>Respuesta:</strong> 24-48 horas hábiles<br><br>` +
        `¡Gracias por confiar en nosotros! ⚡`;
      
      addMessage(confirmationMessage, 'bot');
    }, 1000);
    
    closeModal();
  }, [addMessage, closeModal]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Mensaje de bienvenida inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      addMessage(
        '¡Hola! Soy tu asesor eléctrico especializado en Chile 🇨🇱⚡<br><br>¿En qué puedo ayudarte hoy?',
        'bot'
      );
    }, 800);

    return () => clearTimeout(timer);
  }, [addMessage]);

  return {
    // Estado del chat
    messages,
    isTyping,
    
    // Estado del modal
    isModalOpen,
    
    // Funciones básicas
    addMessage,
    sendMessage,
    processQuery,
    openModal,
    closeModal,
    toggleModal,
    
    // Handlers combinados (los más usados)
    handleSendMessage,
    handleButtonClick,
    handleConsultaSubmit
  };
};