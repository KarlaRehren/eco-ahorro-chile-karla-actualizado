# 🇨🇱⚡ Eco Ahorro Chile - Asistente Virtual React

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF.svg)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Un asistente virtual interactivo para consultas de consumo eléctrico en Chile, desarrollado con React y tecnologías modernas.

## 🎯 Demo

🌐 **Live Demo**: [https://karlarehren.github.io/eco-ahorro-chile-react/](https://karlarehren.github.io/eco-ahorro-chile-react/)

> La aplicación se despliega automáticamente en GitHub Pages cuando se realizan cambios en la rama main. 
> 
> **Nota**: Si es la primera vez, activa GitHub Pages en Settings → Pages → Source: GitHub Actions

## 📸 Screenshots

*La aplicación incluye una interfaz moderna y responsiva con chat interactivo y consultas especializadas.*

## 🚀 Características

- **Interfaz Reactiva**: Desarrollado con React para una experiencia moderna y fluida
- **Chat Interactivo**: Comunicación en tiempo real con el asistente virtual
- **Base de Datos de Conocimiento**: Información especializada sobre el sector eléctrico chileno
- **Modal de Consultas**: Sistema para realizar consultas gratuitas
- **Diseño Responsivo**: Compatible con dispositivos móviles y de escritorio
- **Componentes Modulares**: Arquitectura React limpia y mantenible

## 📋 Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- npm (incluido con Node.js)

## 🛠️ Instalación

1. **Instalar Node.js** (si no lo tienes):
   - Ve a [https://nodejs.org/](https://nodejs.org/)
   - Descarga e instala la versión LTS
   - Reinicia tu terminal/VS Code

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

## 🎯 Ejecución

### Modo Desarrollo
```bash
npm run dev
```
La aplicación se abrirá automáticamente en `http://localhost:3000`

### Construir para Producción
```bash
npm run build
```

### Previsualizar Build de Producción
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # 🆕 COMPONENTES ORGANIZADOS (Patrón profesional)
│   ├── index.js         # Exportaciones principales
│   ├── Layout/          # Componentes de diseño
│   │   ├── Header.jsx
│   │   ├── Header.module.css
│   │   ├── Sidebar.jsx
│   │   ├── Sidebar.module.css
│   │   └── index.js
│   ├── Chat/            # Componentes de chat
│   │   ├── ActionButtons.jsx + .module.css
│   │   ├── ChatArea.jsx + .module.css
│   │   ├── InputSection.jsx + .module.css
│   │   ├── Message.jsx + .module.css
│   │   ├── TypingIndicator.jsx + .module.css
│   │   └── index.js
│   └── Consultation/    # Componentes de consulta
│       ├── ConsultaModal.jsx + .module.css
│       └── index.js
├── hooks/               # Hooks personalizados
│   ├── useChat.js       # Lógica del chat
│   └── useModal.js      # Lógica de modales
├── constants/           # Constantes de la aplicación
├── styles/              # CSS GLOBAL (solo base y utilidades)
│   ├── index.js         # Importación de estilos globales
│   ├── variables.css    # Variables CSS globales
│   ├── main.css         # Utilidades y estilos especiales
│   └── modules/
│       └── comunes.css  # Base, reset y utilidades compartidas
├── utils/
│   └── database.js      # Base de datos de respuestas
├── App.jsx              # Componente principal
└── main.jsx             # Punto de entrada React
```

## 🔧 Tecnologías Utilizadas

- **React 18**: Biblioteca de JavaScript para interfaces de usuario
- **Vite**: Herramienta de construcción rápida
- **CSS3**: Estilos con variables CSS y diseño responsivo
- **JavaScript ES6+**: Sintaxis moderna de JavaScript

## ✨ Funcionalidades

### Chat Interactivo
- Mensajes en tiempo real
- Indicador de escritura
- Formateo de texto con markdown
- Historial de conversación

### Temas Disponibles
- **Reclamos Eléctricos**: Información sobre cómo realizar reclamos
- **Subsidios Estatales**: Detalles sobre subsidios disponibles
- **Paneles Solares**: Guía completa sobre energía solar
- **Derechos del Consumidor**: Información legal y derechos
- **Tips de Ahorro**: Consejos para reducir el consumo
- **Consulta Gratuita**: Formulario para consultas personalizadas

### Interfaz Responsiva
- Diseño adaptable a móviles, tablets y escritorio
- Sidebar colapsable en dispositivos pequeños
- Optimizado para accesibilidad

## 🎨 Personalización

### Colores y Variables CSS
Los colores y variables principales se definen en `src/styles/variables.css`:
```css
:root {
  --primary: #0288D1;      /* Azul principal */
  --accent: #1B5E20;       /* Verde de acento */
  --bg: #FAFAFA;           /* Fondo */
  --spacing-md: 1rem;      /* Espaciado medio */
  --border-radius: 8px;    /* Radio de bordes */
}
```

### CSS Modules & Estilos
- **Variables Globales**: `src/styles/variables.css` - Colores, espaciado, tipografía
- **CSS Modules**: Cada componente tiene su archivo `.module.css` co-localizado
- **Layout**: `src/components/Layout/*.module.css` - Estilos de Header y Sidebar  
- **Chat**: `src/components/Chat/*.module.css` - Estilos de cada componente de chat
- **Consulta**: `src/components/Consultation/*.module.css` - Estilos del modal
- **Base Común**: `src/styles/modules/comunes.css` - Reset y utilidades compartidas

### Agregar Nuevas Respuestas
Edita `src/utils/database.js` para agregar nuevos temas o respuestas.

## 🚀 Comparación con la Versión Original

### Mejoras en React:
- **Estado Reactivo**: Manejo automático del estado de la aplicación
- **Componentes Reutilizables**: Código más organizado y mantenible
- **Mejor Performance**: Renderizado optimizado con React
- **Desarrollo Moderno**: Hot reloading y herramientas de desarrollo
- **Tipado**: Preparado para TypeScript si se desea migrar
- **Testing**: Facilita la implementación de pruebas unitarias

### Migración desde Vanilla JavaScript:
- ✅ Toda la funcionalidad original preservada
- ✅ Mismos estilos y diseño
- ✅ Base de datos de respuestas intacta
- ✅ Modal de consultas funcionando
- ✅ Diseño responsivo mantenido

### 🆕 Mejoras de Arquitectura (v3.0):
- ✅ **CSS Modules**: Estilos encapsulados por componente (eliminación de conflictos)
- ✅ **Estructura Profesional**: Patrón de componentes estándar de la industria
- ✅ **Eliminación de Duplicados**: ~476 líneas de CSS duplicado removidas
- ✅ **Co-localización**: Cada componente con su archivo CSS al lado
- ✅ **Variables CSS**: Colores, espaciado y tipografía centralizados
- ✅ **Mantenibilidad**: Fácil localización y modificación de estilos
- ✅ **Escalabilidad**: Estructura preparada para crecimiento
- ✅ **Performance**: Optimización de carga con Vite

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run serve` - Sirve la aplicación construida

## 🔍 Solución de Problemas

### Error de npm no reconocido:
1. Instala Node.js desde [nodejs.org](https://nodejs.org/)
2. Reinicia VS Code/terminal
3. Verifica con: `node --version` y `npm --version`

### Puerto 3000 ocupado:
- Vite automáticamente usará el siguiente puerto disponible
- O especifica uno diferente en `vite.config.js`

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Desarrollado con ❤️ para ayudar a los consumidores eléctricos de Chile 🇨🇱⚡**