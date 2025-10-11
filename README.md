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
├── components/           # Componentes React (vacío - usando módulos)
├── modules/             # Módulos organizados por funcionalidad
│   ├── layout/          # Header, Sidebar
│   ├── chat/            # Chat, Mensajes, Input
│   └── consultation/    # Modal de consulta
├── hooks/               # Hooks personalizados
│   ├── useChat.js       # Lógica del chat
│   └── useModal.js      # Lógica de modales
├── constants/           # Constantes de la aplicación
├── styles/              # 🆕 CSS MODULAR ORGANIZADO
│   ├── index.js         # Importación central de estilos
│   ├── variables.css    # Variables CSS globales
│   ├── main.css         # Utilidades y estilos especiales
│   └── modules/         # Módulos CSS específicos
│       ├── comunes.css  # Base, reset y utilidades
│       ├── layout.css   # Header, sidebar, estructura
│       ├── chat.css     # Chat, mensajes, input
│       └── consulta.css # Modal y formularios
├── utils/
│   └── database.js      # Base de datos de respuestas
├── App.jsx              # Componente principal
├── main.jsx             # Punto de entrada React
└── style-backup.css     # ⚠️ Respaldo del CSS original
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

### CSS Modular
- **Variables**: `src/styles/variables.css` - Colores, espaciado, tipografía
- **Layout**: `src/styles/modules/layout.css` - Header, sidebar, estructura
- **Chat**: `src/styles/modules/chat.css` - Mensajes, input, botones
- **Modal**: `src/styles/modules/consulta.css` - Formularios y modales
- **Base**: `src/styles/modules/comunes.css` - Reset, utilidades comunes

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

### 🆕 Mejoras de Arquitectura CSS (v2.0):
- ✅ **CSS Modular**: Separación de ~6000 líneas en módulos organizados
- ✅ **Variables CSS**: Colores, espaciado y tipografía centralizados
- ✅ **Eliminación de Duplicación**: Código CSS reutilizable
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