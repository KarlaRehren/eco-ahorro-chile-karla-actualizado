import React, { useState, useEffect } from 'react';
import { FEATURES, CHATBOT_CONFIG, checkChatbotHealth } from '../../config/features';

// Componente que maneja la disponibilidad del chatbot
const ChatbotContainer = ({ children }) => {
  const [chatbotStatus, setChatbotStatus] = useState('loading');
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const initializeChatbot = async () => {
      if (!FEATURES.CHATBOT_ENABLED) {
        setChatbotStatus('disabled');
        return;
      }

      try {
        const isHealthy = await checkChatbotHealth();
        
        if (isHealthy) {
          setChatbotStatus('online');
        } else if (FEATURES.CHATBOT_FALLBACK) {
          setChatbotStatus('fallback');
        } else {
          setChatbotStatus('offline');
        }
      } catch (error) {
        if (retryCount < CHATBOT_CONFIG.MAX_RETRIES) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 2000);
        } else {
          setChatbotStatus('offline');
        }
      }
    };

    initializeChatbot();
  }, [retryCount]);

  // Renderizado condicional basado en el estado
  switch (chatbotStatus) {
    case 'loading':
      return <ChatbotLoading />;
      
    case 'disabled':
      return <ChatbotDisabled />;
      
    case 'offline':
      return <ChatbotOffline />;
      
    case 'fallback':
      return <ChatbotFallback>{children}</ChatbotFallback>;
      
    case 'online':
    default:
      return children;
  }
};

// Componente de carga
const ChatbotLoading = () => (
  <div style={{ 
    padding: '2rem', 
    textAlign: 'center',
    background: 'var(--bg)',
    borderRadius: '8px',
    margin: '1rem'
  }}>
    <div style={{ fontSize: '2rem' }}>🤖</div>
    <p>Iniciando asistente virtual...</p>
  </div>
);

// Componente cuando está deshabilitado
const ChatbotDisabled = () => (
  <div style={{ 
    padding: '2rem', 
    textAlign: 'center',
    background: '#f5f5f5',
    borderRadius: '8px',
    margin: '1rem',
    border: '2px dashed #ccc'
  }}>
    <div style={{ fontSize: '2rem' }}>⚠️</div>
    <h3>Chatbot Deshabilitado</h3>
    <p>El asistente virtual está temporalmente desactivado.</p>
    <p>Puedes usar el <strong>Modal de Consultas</strong> para obtener ayuda.</p>
  </div>
);

// Componente cuando está offline
const ChatbotOffline = () => (
  <div style={{ 
    padding: '2rem', 
    textAlign: 'center',
    background: '#ffebee',
    borderRadius: '8px',
    margin: '1rem',
    border: '2px solid #f44336'
  }}>
    <div style={{ fontSize: '2rem' }}>🔧</div>
    <h3>Servidor en Mantenimiento</h3>
    <p>{CHATBOT_CONFIG.OFFLINE_MESSAGE}</p>
    <p>Las demás funciones del sitio <strong>funcionan normalmente</strong>.</p>
  </div>
);

// Componente fallback con funcionalidad básica
const ChatbotFallback = ({ children }) => (
  <div>
    <div style={{ 
      padding: '0.5rem', 
      background: '#fff3cd',
      border: '1px solid #ffeaa7',
      borderRadius: '4px',
      margin: '0.5rem',
      fontSize: '0.9rem',
      textAlign: 'center'
    }}>
      ⚡ <strong>Modo Básico:</strong> Funcionando con base de datos local
    </div>
    {children}
  </div>
);

export default ChatbotContainer;