import React, { useEffect } from 'react';
// Importaciones directas siguiendo el patrón del compañero (sin index.js)
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import ActionButtons from './components/Chat/ActionButtons';
import ChatArea from './components/Chat/ChatArea';
import InputSection from './components/Chat/InputSection';
import ChatbotContainer from './components/Chat/ChatbotContainer';
import ConsultaModal from './components/Consultation/ConsultaModal';
// Hooks personalizados
import { useChat, useModal } from './hooks';
// Constantes
import { APP_CONFIG } from './constants';
// Configuración de features
import { FEATURES } from './config/features';

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
          {/* Chatbot con sistema de fallback resiliente */}
          <ChatbotContainer>
            <ActionButtons 
              onButtonClick={handleButtonClick}
              onConsultaClick={openModal}
            />
            <ChatArea 
              messages={messages}
              isTyping={isTyping}
            />
            <InputSection onSendMessage={handleSendMessage} />
          </ChatbotContainer>
        </div>
        {/* Sidebar siempre disponible independientemente del chatbot */}
        <Sidebar />
      </div>
      {/* Modal de consulta - funciona independientemente del chatbot */}
      {FEATURES.CONSULTATION_MODAL && (
        <ConsultaModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleConsultaSubmit}
        />
      )}
    </div>
  );
}

export default App;