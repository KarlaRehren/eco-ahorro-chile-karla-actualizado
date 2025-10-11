import React, { useEffect } from 'react';
// Importaciones modulares siguiendo el patrón de tu compañero
import { Header, Sidebar } from './components/Layout';
import { ActionButtons, ChatArea, InputSection } from './components/Chat';
import { ConsultaModal } from './components/Consultation';
// Hooks personalizados
import { useChat, useModal } from './hooks';
// Constantes
import { APP_CONFIG } from './constants';

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