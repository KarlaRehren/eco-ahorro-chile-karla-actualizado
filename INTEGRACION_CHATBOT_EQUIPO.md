# 🤖 Integración de Chatbot Interactivo - Guía para Equipo

## 📋 Información del Componente

**Desarrollado por**: Karla Rehren  
**Repositorio**: [eco-ahorro-chile-karla-actualizado](https://github.com/KarlaRehren/eco-ahorro-chile-karla-actualizado)  
**Rama Principal**: `main` (chatbot incluido en rama principal)  
**Estado**: ✅ Listo para integración  
**Compatibilidad**: React 18+, CSS Modules, Vite  
**Demo Live**: [Ver funcionando](https://karlarehren.github.io/eco-ahorro-chile-karla-actualizado/)  

## 🎯 Qué Incluye el Chatbot

### **🚀 Funcionalidades:**
- ✅ **Chat interactivo** con respuestas automáticas
- ✅ **Base de conocimiento** especializada en electricidad Chile
- ✅ **Modal de consultas** gratuitas con validación
- ✅ **Diseño responsivo** para todos los dispositivos
- ✅ **Animaciones profesionales** y UX optimizada

### **🎨 Componentes Incluidos:**
```
components/Chat/
├── ActionButtons.jsx + .module.css    # Botones temáticos
├── ChatArea.jsx + .module.css         # Área de mensajes
├── InputSection.jsx + .module.css     # Input con validación
├── Message.jsx + .module.css          # Mensajes individuales
├── TypingIndicator.jsx + .module.css  # Indicador "escribiendo..."
└── ChatbotContainer.jsx               # 🛡️ Sistema resiliente
```

### **🧠 Lógica y Datos:**
```
hooks/
├── useChat.js          # Lógica del chat y estados
└── useModal.js         # Manejo de modales

utils/
└── database.js         # Base de conocimiento (respuestas)

config/
└── features.js         # 🆕 Configuración modular
```

## 🚀 Instrucciones de Integración

### **Paso 1: Obtener los Archivos**

#### **Opción A - Clonar Repo Completo (Recomendado)**
```bash
# Clonar el repositorio actualizado de Karla
git clone https://github.com/KarlaRehren/eco-ahorro-chile-karla-actualizado.git karla-chatbot

# Entrar al directorio (todo está en rama main)
cd karla-chatbot

# Ver los archivos disponibles
ls -la src/components/Chat/
ls -la src/config/
ls -la src/hooks/
```

#### **Opción B - Descargar Archivos Específicos**
```bash
# Desde su proyecto, agregar el repo de Karla como remote
git remote add karla-repo https://github.com/KarlaRehren/eco-ahorro-chile-karla-actualizado.git
git fetch karla-repo

# Cherry-pick solo los archivos del chatbot (desde main)
git checkout karla-repo/main -- src/components/Chat/
git checkout karla-repo/main -- src/config/features.js
git checkout karla-repo/main -- src/utils/database.js
git checkout karla-repo/main -- src/hooks/useChat.js
git checkout karla-repo/main -- src/hooks/useModal.js
```

### **Paso 2: Copiar a Su Proyecto**

```bash
# En su proyecto, crear las carpetas necesarias
mkdir -p src/components/Chat
mkdir -p src/config

# Copiar archivos del chatbot (ajustar rutas según su estructura)
cp karla-chatbot/src/components/Chat/* src/components/Chat/
cp karla-chatbot/src/config/features.js src/config/
cp karla-chatbot/src/utils/database.js src/utils/
cp karla-chatbot/src/hooks/useChat.js src/hooks/
cp karla-chatbot/src/hooks/useModal.js src/hooks/
```

### **Paso 3: Integrar en Su App.jsx**

```jsx
// En su App.jsx o componente principal
import React, { useState } from 'react';

// 🆕 Importar componentes del chatbot
import ActionButtons from './components/Chat/ActionButtons';
import ChatArea from './components/Chat/ChatArea';
import InputSection from './components/Chat/InputSection';
import ChatbotContainer from './components/Chat/ChatbotContainer';
import ConsultaModal from './components/Consultation/ConsultaModal';

// 🆕 Importar hooks del chatbot
import { useChat, useModal } from './hooks';

// 🆕 Importar configuración (opcional - para control)
import { FEATURES } from './config/features';

function App() {
  // 🆕 Hooks del chatbot
  const { messages, isTyping, addMessage, sendMessage, processQuery } = useChat();
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();

  // 🆕 Handlers del chatbot
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
    // Lógica de confirmación...
    closeModal();
  };

  return (
    <div className="app">
      {/* Sus componentes existentes */}
      <Header />
      
      {/* 🆕 CHATBOT - Integrar donde quieran */}
      <div className="chatbot-section">
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
      
      {/* Sus componentes existentes */}
      <Footer />
      
      {/* 🆕 Modal de consultas */}
      <ConsultaModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleConsultaSubmit}
      />
    </div>
  );
}

export default App;
```

### **Paso 4: Configurar Estilos CSS**

El chatbot usa **CSS Modules**, así que los estilos están encapsulados. Solo necesitan importar los estilos globales si no los tienen:

```jsx
// En su main.jsx o index.js
import './styles/variables.css';  // Variables CSS globales
import './styles/main.css';       // Estilos base (si no los tienen)
```

### **Paso 5: Configuración Opcional**

```javascript
// En src/config/features.js (pueden modificar según necesidades)
export const FEATURES = {
  CHATBOT_ENABLED: true,           // ← Activar/desactivar chatbot
  CHATBOT_FALLBACK: true,          // ← Modo básico si hay problemas  
  CONSULTATION_MODAL: true,        // ← Activar modal de consultas
  SIDEBAR_INFO: false              // ← Si no quieren el sidebar de Karla
};
```

## 🛡️ Sistema de Seguridad (Resiliente)

### **¿Qué pasa si el chatbot tiene problemas?**

El `ChatbotContainer` maneja automáticamente los errores:

1. **🟢 Funcionamiento Normal**: Todo funciona perfecto
2. **🟡 Modo Básico**: Usa datos locales si hay problemas de conexión
3. **🔴 Modo Seguro**: Se desactiva automáticamente, resto del sitio funcional

### **Control Manual:**
```javascript
// Para deshabilitar temporalmente:
export const FEATURES = {
  CHATBOT_ENABLED: false,  // ← Solo cambiar esto
  // El resto del sitio sigue funcionando normal
};
```

## 📋 Personalización para Su Proyecto

### **Cambiar Colores/Tema:**
```css
/* En su archivo de variables CSS */
:root {
  --primary: #SU_COLOR_PRINCIPAL;
  --accent: #SU_COLOR_SECUNDARIO;
  --bg: #SU_COLOR_FONDO;
}
```

### **Modificar Base de Conocimiento:**
```javascript
// En src/utils/database.js - agregar sus propios temas
export const db = {
  // Mantener los temas de electricidad de Karla
  'reclamos contra la luz': [...],
  'paneles solares': [...],
  
  // 🆕 Agregar sus temas específicos
  'su-tema-especial': [
    'Respuesta personalizada para su proyecto...'
  ],
};
```

### **Personalizar Botones:**
```jsx
// En ActionButtons.jsx - modificar los botones
const buttons = [
  { query: 'reclamos contra la luz', text: 'Reclamos contra la luz' },
  { query: 'sus-consultas', text: 'Sus Consultas Especiales' }, // 🆕
  // ... más botones
];
```

## 🎨 Opciones de Layout

### **Opción 1 - Chatbot Completo (Como Karla):**
```jsx
<div className="main-container">
  <Header />
  <div className="content-wrapper">
    <div className="chat-column">
      <ActionButtons />
      <ChatArea />
      <InputSection />
    </div>
    <Sidebar />  {/* Opcional */}
  </div>
</div>
```

### **Opción 2 - Solo Chat Widget:**
```jsx
<div className="su-layout-existente">
  {/* Sus componentes */}
  
  <div className="chat-widget">
    <ChatArea messages={messages} isTyping={isTyping} />
    <InputSection onSendMessage={handleSendMessage} />
  </div>
</div>
```

### **Opción 3 - Modal Emergente:**
```jsx
<button onClick={() => setShowChatbot(true)}>
  💬 Abrir Asistente
</button>

{showChatbot && (
  <div className="chatbot-modal">
    <ChatbotContainer>
      <ActionButtons />
      <ChatArea />
      <InputSection />
    </ChatbotContainer>
  </div>
)}
```

## 🔧 Troubleshooting

### **Error: "Cannot find module"**
```bash
# Verificar que copiaron todos los archivos
ls src/components/Chat/
ls src/hooks/useChat.js
ls src/utils/database.js
```

### **Error: "CSS Modules not working"**
```bash
# Verificar que tienen Vite configurado para CSS Modules
# En vite.config.js debe estar:
css: {
  modules: true
}
```

### **Error: "Variables CSS not defined"**
```bash
# Copiar las variables CSS de Karla:
cp karla-chatbot/src/styles/variables.css src/styles/
```

## 📞 Soporte y Contacto

- **👩‍💻 Desarrolladora**: Karla Rehren  
- **📧 Consultas**: Usar Issues en el repo de Karla
- **� Repositorio**: https://github.com/KarlaRehren/eco-ahorro-chile-karla-actualizado
- **�📖 Documentación Completa**: Ver README.md en el repo principal
- **🚀 Demo Live**: https://karlarehren.github.io/eco-ahorro-chile-karla-actualizado/
- **🔄 Actualizaciones**: Revisar commits en rama `main`

## 🎯 Checklist de Integración

- [ ] ✅ Archivos copiados correctamente
- [ ] ✅ Imports agregados en App.jsx  
- [ ] ✅ Hooks implementados
- [ ] ✅ Estilos CSS funcionando
- [ ] ✅ Build exitoso (`npm run build`)
- [ ] ✅ Testing en diferentes dispositivos
- [ ] ✅ Configuración de features personalizada
- [ ] ✅ Plan de rollback preparado

---

## 🎉 Resultado Final

Una vez integrado correctamente, tendrán:

- ✅ **Chat interactivo profesional**
- ✅ **Funcionalidad resiliente** (no rompe el sitio)
- ✅ **Fácil personalización** para su marca
- ✅ **Base de conocimiento expandible**
- ✅ **Diseño responsivo** automático

**¡El chatbot de Karla funcionando perfectamente en su proyecto!** 🚀

---

*Desarrollado con ❤️ por Karla Rehren para el equipo*