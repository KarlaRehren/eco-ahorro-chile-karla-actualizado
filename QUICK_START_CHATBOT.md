# 🤖 Chat Interactivo - Integración Rápida

> **Componente de chatbot profesional desarrollado por [Karla Rehren](https://github.com/KarlaRehren/eco-ahorro-chile-karla-actualizado)**  
> Listo para integrar en proyectos React con CSS Modules

## ⚡ Quick Start

### 1️⃣ **Obtener Archivos**
```bash
# Clonar repositorio del chatbot
git clone https://github.com/KarlaRehren/eco-ahorro-chile-karla-actualizado.git
cd eco-ahorro-chile-karla-actualizado

# Ver componentes disponibles (rama main tiene todo listo)
ls src/components/Chat/
ls src/config/
```

### 2️⃣ **Copiar a Tu Proyecto**
```bash
# Copiar archivos necesarios del chatbot a tu proyecto
cp -r eco-ahorro-chile-karla-actualizado/src/components/Chat/ tu-proyecto/src/components/
cp eco-ahorro-chile-karla-actualizado/src/hooks/useChat.js tu-proyecto/src/hooks/
cp eco-ahorro-chile-karla-actualizado/src/hooks/useModal.js tu-proyecto/src/hooks/
cp eco-ahorro-chile-karla-actualizado/src/utils/database.js tu-proyecto/src/utils/
cp eco-ahorro-chile-karla-actualizado/src/config/features.js tu-proyecto/src/config/

# Archivos incluidos:
# 📁 src/components/Chat/      - Componentes del chatbot
# 🎣 src/hooks/useChat.js      - Lógica del chat  
# 🎣 src/hooks/useModal.js     - Control de modales
# 🗄️ src/utils/database.js    - Base de conocimiento
# ⚙️ src/config/features.js    - Configuración resiliente
```

### 3️⃣ **Integrar en App.jsx**
```jsx
import { useChat, useModal } from './hooks';
import { ActionButtons, ChatArea, InputSection, ChatbotContainer } from './components/Chat';
import ConsultaModal from './components/Consultation/ConsultaModal';

function App() {
  const { messages, isTyping, addMessage, sendMessage, processQuery } = useChat();
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();

  const handleSendMessage = (message) => {
    const result = sendMessage(message);
    if (result === 'modal') openModal();
  };

  const handleButtonClick = (buttonText, query) => {
    addMessage(buttonText, 'user');
    const result = processQuery(query);  
    if (result === 'modal') openModal();
  };

  return (
    <div className="app">
      {/* Tu contenido existente */}
      
      {/* 🚀 CHATBOT */}
      <ChatbotContainer>
        <ActionButtons onButtonClick={handleButtonClick} onConsultaClick={openModal} />
        <ChatArea messages={messages} isTyping={isTyping} />
        <InputSection onSendMessage={handleSendMessage} />
      </ChatbotContainer>
      
      <ConsultaModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleConsultaSubmit} />
    </div>
  );
}
```

## 🎯 Características

| Feature | Descripción | Estado |
|---------|------------|--------|
| 💬 **Chat Interactivo** | Respuestas automáticas con IA | ✅ Listo |
| 📋 **Modal Consultas** | Formulario con validación | ✅ Listo |
| 📱 **Responsive Design** | Funciona en todos los dispositivos | ✅ Listo |
| 🛡️ **Sistema Resiliente** | No rompe si hay errores | ✅ Listo |
| 🎨 **CSS Modules** | Estilos encapsulados | ✅ Listo |
| ⚙️ **Configurable** | Fácil activar/desactivar | ✅ Listo |

## 🛡️ Seguridad & Control

```javascript
// src/config/features.js
export const FEATURES = {
  CHATBOT_ENABLED: true,    // ← false para desactivar si hay problemas
  CHATBOT_FALLBACK: true,   // ← Modo básico automático
  CONSULTATION_MODAL: true  // ← Modal independiente
};
```

**Si algo falla**: Solo cambiar `CHATBOT_ENABLED: false` y el resto del sitio sigue funcionando. 🚀

## 📁 Estructura de Archivos

```
Tu Proyecto/
├── src/
│   ├── components/
│   │   └── Chat/                    # 🆕 Componentes del chatbot
│   │       ├── ActionButtons.jsx + .module.css
│   │       ├── ChatArea.jsx + .module.css  
│   │       ├── InputSection.jsx + .module.css
│   │       ├── Message.jsx + .module.css
│   │       ├── TypingIndicator.jsx + .module.css
│   │       └── ChatbotContainer.jsx
│   ├── hooks/
│   │   ├── useChat.js              # 🆕 Lógica del chat
│   │   └── useModal.js             # 🆕 Control de modales  
│   ├── utils/
│   │   └── database.js             # 🆕 Base de conocimiento
│   └── config/
│       └── features.js             # 🆕 Configuración modular
```

## 🎨 Personalización

### **Cambiar Colores**
```css
/* En tu archivo CSS */
:root {
  --primary: #TU_COLOR;
  --accent: #TU_ACENTO;
}
```

### **Agregar Temas**
```javascript
// En database.js
export const db = {
  'tu-tema': ['Tu respuesta personalizada...'],
  // ... temas existentes de Karla
};
```

### **Personalizar Botones**
```jsx
// En ActionButtons.jsx
const buttons = [
  { query: 'tu-consulta', text: 'Tu Botón Personalizado' },
  // ... botones existentes
];
```

## 📞 Soporte

- **🔗 Repositorio**: [eco-ahorro-chile-karla-actualizado](https://github.com/KarlaRehren/eco-ahorro-chile-karla-actualizado)
- **📌 Rama**: `main` (todo listo en rama principal)  
- **👩‍💻 Desarrolladora**: Karla Rehren
- **📖 Docs Completas**: Ver `INTEGRACION_CHATBOT_EQUIPO.md` en el repo
- **🚀 Demo Live**: [Ver chatbot funcionando](https://karlarehren.github.io/eco-ahorro-chile-karla-actualizado/)

## ✅ Checklist

- [ ] Archivos copiados ✅
- [ ] Imports agregados ✅  
- [ ] Build exitoso ✅
- [ ] Testing móvil ✅
- [ ] Configuración personalizada ✅

---

**🎉 ¡Listo! Chatbot profesional funcionando en tu proyecto.**