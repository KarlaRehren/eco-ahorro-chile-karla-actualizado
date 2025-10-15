# Eco Ahorro Chile - Asistente Virtual React

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
- **Chat Interactivo**: Comunicación en tiempo real con respuestas inteligentes
- **Base de Conocimiento**: Información especializada del sector eléctrico chileno
- **Modal de Consultas**: Sistema de consultas gratuitas con validación para regiones de Chile
- **Diseño Responsivo**: Compatible con todos los dispositivos (móvil, tablet, desktop)
- **Indicadores Visuales**: Typing indicators animados y transiciones suaves
- **Validación Especializada**: Formularios adaptados para datos chilenos (regiones, teléfonos)
- **Arquitectura Resiliente**: Sistema de manejo de errores y fallbacks automáticos
- **CSS Modules**: Estilos encapsulados sin conflictos globales
- **Performance Optimizada**: Build rápido (~1.2s) y hot reload instantáneo

## 📁 Estructura del Proyecto

```
src/
├── components/                    # 🆕 ARQUITECTURA PROFESIONAL ACTUALIZADA
│   ├── Chatbot/                   # 💬 Componentes del chatbot
│   │   ├── ActionButtons.jsx      # Botones de acciones rápidas
│   │   ├── ChatArea.jsx           # Área de chat integrada
│   │   ├── InputSection.jsx       # Sección de entrada de texto
│   │   └── ConsultaModal.jsx      # Modal de consultas gratuitas
│   ├── Layout/                    # 🎨 Componentes de layout
│   │   ├── Header.jsx             # Cabecera de la aplicación
│   │   └── Sidebar.jsx            # Barra lateral informativa
│   ├── common/                    # 🔧 Utilidades y lógica compartida
│   │   ├── useChatbotHandlers.js  # Hook consolidado principal
│   │   ├── useFormValidation.js   # Validación para formularios de Chile
│   │   ├── useChat.js             # Lógica básica del chat
│   │   ├── useModal.js            # Manejo de modales
│   │   ├── regions.js             # Regiones de Chile (datos)
│   │   ├── database.js            # Base de conocimiento especializada
│   │   └── index.js               # Exportaciones centralizadas
│   └── styles/                    # 🎨 Sistema de estilos profesional
│       ├── variables.css          # Variables CSS globales
│       ├── common.module.css      # Estilos utilitarios modulares
│       ├── main.css               # Estilos principales y reset
│       ├── ActionButtons.module.css   # Estilos de botones
│       ├── ChatArea.module.css        # Estilos del área de chat
│       ├── InputSection.module.css    # Estilos de input
│       ├── ConsultaModal.module.css   # Estilos del modal
│       ├── Header.module.css          # Estilos del header
│       └── Sidebar.module.css         # Estilos del sidebar
├── App.jsx                        # Componente raíz de la aplicación
└── main.jsx                       # Punto de entrada React
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

### 🚀 Evolución del Proyecto - Todas las Fases Completadas:

#### **Fase 1: CSS Modularización (✅ Completada)**
- ✅ Dividir ~6000 líneas de CSS monolítico
- ✅ Crear 9+ módulos CSS organizados por componente
- ✅ Implementar variables CSS centralizadas

#### **Fase 2: CSS Modules (✅ Completada)**
- ✅ Implementar CSS Modules por componente
- ✅ Encapsular estilos para evitar conflictos globales
- ✅ Centralizar estilos en `components/styles/`

#### **Fase 3: Eliminación de Duplicados (✅ Completada)**
- ✅ Remover código duplicado en todos los archivos
- ✅ Optimizar imports y exportaciones
- ✅ Limpiar componentes obsoletos (Message.jsx, TypingIndicator.jsx)
- ✅ Eliminar archivos innecesarios (setup.bat, docs/, QUICK_START_CHATBOT.md)

#### **Fase 4: Reestructuración Profesional (✅ Completada)**
- ✅ Organizar en: `Chatbot/`, `Layout/`, `common/`, `styles/`
- ✅ Hook consolidado `useChatbotHandlers` con toda la lógica
- ✅ Validación especializada para formularios de Chile
- ✅ Integración ChatArea con funcionalidad completa

### � **Resultado Final Optimizado:**
- **✅ Arquitectura Modular**: Estructura profesional consolidada
- **✅ Zero Duplicación**: Código completamente limpio
- **✅ Performance**: Build exitoso en ~1.2s sin errores
- **✅ Mantenibilidad**: Documentación completa actualizada
- **✅ Escalabilidad**: Preparado para integración en equipos
- **✅ Especialización Chile**: Validación de regiones y formularios

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
