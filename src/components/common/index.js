// Exportar hooks
export { useChat } from './useChat';
export { useModal } from './useModal';
export { useChatbotHandlers } from './useChatbotHandlers';
export { useFormValidation } from './useFormValidation';

// Exportar utilidades
export * from './regions';

// Constantes de la aplicación
export const APP_CONFIG = {
  name: 'Eco Ahorro Chile',
  description: 'Asistente Virtual para consultas de consumo eléctrico',
  version: '1.0.0'
};

export const TYPING_DELAY = {
  MIN: 1200,
  MAX: 2000
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact'
};

export const LOCAL_STORAGE_KEYS = {
  CHAT_HISTORY: 'eco_ahorro_chat_history',
  USER_PREFERENCES: 'eco_ahorro_preferences'
};