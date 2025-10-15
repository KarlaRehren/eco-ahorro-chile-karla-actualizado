import React, { useEffect } from 'react';
// Importaciones del layout
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
// Importaciones del chatbot consolidado
import ChatArea from './components/Chatbot/ChatArea';
import ActionButtons from './components/Chatbot/ActionButtons';
import InputSection from './components/Chatbot/InputSection';
import ConsultaModal from './components/Chatbot/ConsultaModal';
// Hooks personalizados de la carpeta common
import { useChat, useModal } from './components/common';
// Constantes
import { APP_CONFIG } from './components/common';

function App() {
  // Usar hooks personalizados
  const { messages, isTyping, addMessage, sendMessage, processQuery } = useChat();
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();

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

  const handleSendMessage = (message) => {
    const result = sendMessage(message);
    if (result === 'modal') {
      openModal();
    }
  };

  const handleButtonClick = (buttonText, query) => {
    addMessage(buttonText, 'user');
    const result = processQuery(query);
    if (result === 'modal') {
      openModal();
    }
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
    
    closeModal();
  };

  return (
    <div className="main-container">
      <Header />
      <div className="content-wrapper">
        <div className="chat-column">
          <ActionButtons 
            onButtonClick={handleButtonClick}
            onConsultaClick={openModal}
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
        onClose={closeModal}
        onSubmit={handleConsultaSubmit}
      />
    </div>
  );
}

export default App;