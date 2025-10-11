/* ==========================================================================
   INDEX CSS - IMPORTACIÓN MODULAR DE TODOS LOS ESTILOS
   ========================================================================== */

// 1. Importar variables y estilos base primero
import './variables.css';
import './modules/comunes.css';

// 2. Importar módulos específicos de componentes (CSS Modules)
import './components/Header.module.css';
import './components/Sidebar.module.css';
import './components/ChatArea.module.css';
import './components/Message.module.css';
import './components/ActionButtons.module.css';
import './components/InputSection.module.css';
import './components/TypingIndicator.module.css';
import './components/ConsultaModal.module.css';

// 3. Importar estilos adicionales y utilidades
import './main.css';