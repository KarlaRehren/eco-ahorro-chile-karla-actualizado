# 📁 Estructura Modular - Eco Ahorro Chile React

## Arquitectura por Módulos

Esta aplicación está organizada siguiendo una arquitectura modular que separa las responsabilidades y facilita el mantenimiento.

```
src/
├── modules/              # Módulos funcionales
│   ├── chat/            # Todo lo relacionado con el chat
│   │   ├── ActionButtons.jsx
│   │   ├── ChatArea.jsx  
│   │   ├── InputSection.jsx
│   │   ├── Message.jsx
│   │   ├── TypingIndicator.jsx
│   │   └── index.js     # Exportaciones del módulo
│   ├── consultation/    # Funcionalidad de consultas
│   │   ├── ConsultaModal.jsx
│   │   └── index.js
│   └── layout/          # Componentes de layout
│       ├── Header.jsx
│       ├── Sidebar.jsx
│       └── index.js
├── hooks/               # Hooks personalizados
│   ├── useChat.js       # Lógica del chat
│   ├── useModal.js      # Manejo de modales
│   └── index.js         # Exportaciones centralizadas
├── constants/           # Constantes de la aplicación
│   └── index.js
├── utils/               # Utilidades y helpers
│   └── database.js
├── App.jsx              # Componente principal
├── main.jsx             # Punto de entrada
└── style.css            # Estilos globales
```

## Beneficios de esta Estructura

### **1. Separación de Responsabilidades**
- **`modules/chat/`**: Todo lo relacionado con la funcionalidad del chat
- **`modules/consultation/`**: Manejo de consultas y formularios
- **`modules/layout/`**: Componentes de estructura visual

### **2. Hooks Personalizados**
- **`useChat`**: Maneja el estado y lógica del chat
- **`useModal`**: Controla la apertura/cierre de modales

### **3. Importaciones Limpias**
```javascript
// Antes (importaciones individuales)
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Ahora (importaciones modulares)
import { Header, Sidebar } from './modules/layout';
```

### **4. Constantes Centralizadas**
```javascript
import { APP_CONFIG, TYPING_DELAY } from './constants';
```

## Cómo Agregar Nuevos Módulos

### **1. Crear la estructura:**
```bash
src/modules/nuevo-modulo/
├── Componente1.jsx
├── Componente2.jsx
└── index.js
```

### **2. Configurar exportaciones:**
```javascript
// src/modules/nuevo-modulo/index.js
export { default as Componente1 } from './Componente1';
export { default as Componente2 } from './Componente2';
```

### **3. Usar en App.jsx:**
```javascript
import { Componente1, Componente2 } from './modules/nuevo-modulo';
```

## Comandos Útiles

```bash
# Ejecutar la aplicación
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## Notas Importantes

- Cada módulo tiene su propio `index.js` para centralizar exportaciones
- Los hooks personalizados simplifican la lógica del componente principal
- Las constantes están centralizadas para facilitar cambios globales
- La estructura facilita el testing y la escalabilidad

Esta organización hace que el código sea más mantenible, testeable y fácil de entender para nuevos desarrolladores. 🎉