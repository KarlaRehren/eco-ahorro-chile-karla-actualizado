/* ==========================================================================
   FEATURE FLAGS - CONFIGURACIÓN MODULAR DE COMPONENTES
   ========================================================================== */

// Configuración de features que se pueden activar/desactivar
export const FEATURES = {
  // Chatbot independiente - se puede desactivar si hay problemas
  CHATBOT_ENABLED: true,
  
  // Modo fallback - usa base de datos local si el servidor falla
  CHATBOT_FALLBACK: true,
  
  // Consulta modal - independiente del chat
  CONSULTATION_MODAL: true,
  
  // Sidebar informativa - siempre activa
  SIDEBAR_INFO: true,
  
  // Modo de desarrollo vs producción
  DEVELOPMENT_MODE: import.meta.env.DEV || false
};

// Configuración del chatbot
export const CHATBOT_CONFIG = {
  // URL del servidor del chatbot (si se implementa)
  API_URL: import.meta.env.VITE_CHATBOT_API || null,
  
  // Timeout para considerar el servidor caído
  TIMEOUT: 5000,
  
  // Reintentos antes de usar fallback
  MAX_RETRIES: 3,
  
  // Mensaje cuando el servidor está caído
  OFFLINE_MESSAGE: '🔧 El chatbot está en mantenimiento. Usa el modo básico.',
  
  // Componentes independientes que funcionan sin chatbot
  INDEPENDENT_FEATURES: [
    'consultation_modal',
    'sidebar_info', 
    'static_content'
  ]
};

// Detectar si el chatbot está disponible
export const checkChatbotHealth = async () => {
  if (!FEATURES.CHATBOT_ENABLED) return false;
  
  try {
    // Si hay API externa, verificar conectividad
    if (CHATBOT_CONFIG.API_URL) {
      const response = await fetch(`${CHATBOT_CONFIG.API_URL}/health`, {
        timeout: CHATBOT_CONFIG.TIMEOUT
      });
      return response.ok;
    }
    
    // Si es local, siempre está disponible
    return true;
  } catch (error) {
    console.warn('Chatbot no disponible:', error);
    return false;
  }
};