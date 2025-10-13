# 🇨🇱⚡ Eco Ahorro Chile - Asistente Virtual React

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.20-646CFF.svg)](https://vitejs.dev/)
[![CSS Modules](https://img.shields.io/badge/CSS_Modules-Enabled-green.svg)](https://github.com/css-modules/css-modules)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Un asistente virtual interactivo para consultas de consumo eléctrico en Chile, desarrollado con React y arquitectura modular profesional.

## 🎯 Demo

🌐 **Live Demo**: [https://karlarehren.github.io/eco-ahorro-chile-react/](https://karlarehren.github.io/eco-ahorro-chile-react/)

## 🚀 Características

### 🎨 **Arquitectura Profesional**
- **CSS Modules**: Estilos encapsulados por componente
- **Estructura Modular**: Componentes organizados por funcionalidad
- **Hooks Personalizados**: Lógica reutilizable y limpia
- **Variables CSS**: Sistema de diseño consistente

### 💬 **Funcionalidades**
- **Chat Interactivo**: Comunicación en tiempo real con IA
- **Base de Conocimiento**: Información especializada del sector eléctrico chileno
- **Modal de Consultas**: Sistema de consultas gratuitas con validación
- **Diseño Responsivo**: Compatible con todos los dispositivos
- **Indicadores Visuales**: Typing indicators y animaciones suaves

## 📁 Estructura del Proyecto

```
src/
├── components/          # 🆕 COMPONENTES PROFESIONALES
│   ├── Layout/          # Header + Sidebar
│   │   ├── Header.jsx + Header.module.css
│   │   └── Sidebar.jsx + Sidebar.module.css
│   ├── Chat/            # Funcionalidad de chat
│   │   ├── ActionButtons.jsx + .module.css
│   │   ├── ChatArea.jsx + .module.css
│   │   ├── InputSection.jsx + .module.css
│   │   ├── Message.jsx + .module.css
│   │   └── TypingIndicator.jsx + .module.css
│   └── Consultation/    # Modal de consulta
│       └── ConsultaModal.jsx + .module.css
├── hooks/               # Hooks personalizados
│   ├── useChat.js       # Lógica del chat
│   ├── useModal.js      # Manejo de modales
│   └── index.js
├── constants/           # Constantes de la aplicación
│   └── index.js         # APP_CONFIG, TYPING_DELAY, etc.
├── styles/              # CSS GLOBAL
│   ├── index.js         # Importación de estilos globales
│   ├── variables.css    # Variables CSS (colores, spacing, etc.)
│   ├── main.css         # Utilidades y estilos especiales
│   └── modules/
│       └── comunes.css  # Base, reset y utilidades
├── utils/
│   └── database.js      # Base de datos de respuestas
├── App.jsx              # Componente principal
└── main.jsx             # Punto de entrada React
```

## 🛠️ Instalación y Configuración

### Requisitos Previos
- [Node.js](https://nodejs.org/) (versión 16 o superior)
- npm (incluido con Node.js)

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/KarlaRehren/eco-ahorro-chile-react.git

# Navegar al directorio
cd eco-ahorro-chile-react

# Instalar dependencias
npm install
```

### Ejecución

#### Modo Desarrollo
```bash
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

#### Construcción para Producción
```bash
npm run build
```

#### Previsualizar Build
```bash
npm run preview
```

## 🎨 CSS Modules y Sistema de Estilos

### Arquitectura CSS Profesional

Este proyecto utiliza **CSS Modules** para encapsular estilos por componente, eliminando conflictos y mejorando la mantenibilidad.

#### ✅ **Ventajas Implementadas:**
- **Encapsulación**: Cada componente tiene sus propios estilos
- **No hay conflictos**: Nombres de clases únicos automáticamente
- **Mantenibilidad**: Fácil localización y modificación
- **Escalabilidad**: Nuevos componentes = nuevos módulos CSS
- **Performance**: Vite optimiza automáticamente la carga

#### 🎯 **Patrón de Uso:**
```jsx
// Componente Header.jsx
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Eco Ahorro Chile</h1>
    </header>
  );
}
```

```css
/* Header.module.css */
.header {
  background: var(--white);
  border-bottom: 1px solid var(--border-color);
}

.title {
  color: var(--primary);
  font-size: var(--font-size-lg);
}
```

### Variables CSS Globales

```css
:root {
  /* Colores */
  --primary: #2E7D32;      /* Verde principal */
  --secondary: #388E3C;    /* Verde secundario */
  --accent: #1B5E20;       /* Verde de acento */
  --bg: #FAFAFA;           /* Fondo */
  
  /* Espaciado */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  
  /* Tipografía */
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.25rem;
  
  /* Otros */
  --border-radius: 8px;
  --transition-fast: 0.2s ease;
}
```

## 🧩 Hooks Personalizados

### useChat Hook
```jsx
import { useChat } from './hooks';

function App() {
  const { 
    messages, 
    isTyping, 
    addMessage, 
    sendMessage, 
    processQuery 
  } = useChat();
  
  // Usar en el componente...
}
```

### useModal Hook
```jsx
import { useModal } from './hooks';

function App() {
  const { 
    isOpen, 
    openModal, 
    closeModal 
  } = useModal();
  
  // Controlar modales...
}
```

## 📱 Responsive Design

El diseño se adapta automáticamente a diferentes dispositivos:

- **📱 Mobile**: Hasta 600px
- **📲 Tablet**: 601px - 1024px  
- **💻 Desktop**: 1025px - 1399px
- **🖥️ Large Desktop**: 1400px+

## 🔧 Tecnologías Utilizadas

- **React 18.2.0**: Biblioteca para interfaces de usuario
- **Vite 5.4.20**: Build tool y desarrollo rápido
- **CSS Modules**: Estilos encapsulados
- **JavaScript ES6+**: Características modernas del lenguaje
- **CSS3**: Variables CSS, Grid, Flexbox, Animaciones

## 🎯 Migración y Refactoring Completado

### ✅ Fases de Mejora Implementadas:

#### **Fase 1: CSS Modularización**
- ➜ Dividir ~6000 líneas de CSS monolítico
- ➜ Crear 8 módulos CSS organizados por funcionalidad
- ➜ Implementar variables CSS centralizadas

#### **Fase 2: CSS Modules**
- ➜ Implementar CSS Modules por componente
- ➜ Encapsular estilos para evitar conflictos
- ➜ Co-localizar CSS con componentes JSX

#### **Fase 3: Eliminación de Duplicados**
- ➜ Remover ~476 líneas de CSS duplicado
- ➜ Optimizar imports y exportaciones
- ➜ Limpiar archivos innecesarios

#### **Fase 4: Restructuración Profesional**
- ➜ Organizar componentes según patrón de equipo
- ➜ Implementar importaciones directas
- ➜ Eliminar archivos `index.js` redundantes

### 🎉 **Resultado Final:**
- **Arquitectura Profesional**: Patrón estándar de la industria
- **Mantenibilidad**: Fácil localización y modificación
- **Escalabilidad**: Estructura preparada para crecimiento
- **Performance**: Optimizada con Vite y CSS Modules
- **Consistencia**: Siguiendo mejores prácticas del equipo

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🐛 Reportar Problemas

Si encuentras algún bug o tienes una sugerencia, por favor abre un [issue](https://github.com/KarlaRehren/eco-ahorro-chile-react/issues).

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Equipo de Desarrollo

- **Karla Rehren** - Desarrollo Principal
- **Equipo de Revisión** - Mentores y profesores
- **Compañeros de Equipo** - Revisión de código y patrones

---

⚡ **Desarrollado con** ❤️ **para el sector eléctrico chileno** 🇨🇱