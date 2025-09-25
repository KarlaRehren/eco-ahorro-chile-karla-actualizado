import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import ChatArea from './components/ChatArea';
import InputSection from './components/InputSection';
import Sidebar from './components/Sidebar';
import ConsultaModal from './components/ConsultaModal';
import { getResponse } from './utils/database';

function App() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initial welcome message
  useEffect(() => {
    const timer = setTimeout(() => {
      addMessage(
        '¡Hola! Soy tu asesor eléctrico especializado en Chile 🇨🇱⚡<br><br>¿En qué puedo ayudarte hoy?',
        'bot'
      );
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const addMessage = (text, sender) => {
    setMessages(prev => [...prev, { text, sender }]);
  };

  const processQuery = (query) => {
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const responses = getResponse(query);
      
      if (responses === 'modal') {
        setIsModalOpen(true);
      } else {
        const responseArray = Array.isArray(responses) ? responses : [responses];
        responseArray.forEach(response => {
          addMessage(response, 'bot');
        });
      }
    }, 1200 + Math.random() * 800);
  };

  const handleSendMessage = (message) => {
    addMessage(message, 'user');
    processQuery(message);
  };

  const handleButtonClick = (buttonText, query) => {
    addMessage(buttonText, 'user');
    processQuery(query);
  };

  const handleConsultaClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleConsultaSubmit = (formData) => {
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
    
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Handle modal opening effect
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <div className="main-container">
      <Header />
      <div className="content-wrapper">
        <div className="chat-column">
          <ActionButtons 
            onButtonClick={handleButtonClick}
            onConsultaClick={handleConsultaClick}
          />
          <ChatArea 
            messages={messages}
            isTyping={isTyping}
          />
          <InputSection onSendMessage={handleSendMessage} />
        </div>
        <Sidebar />
      </div>
      <ConsultaModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleConsultaSubmit}
      />
    </div>
  );
}

export default App;