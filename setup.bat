@echo off
echo ============================================
echo  Eco Ahorro Chile - React Setup
echo ============================================
echo.

echo Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js no esta instalado.
    echo.
    echo Por favor instala Node.js desde: https://nodejs.org/
    echo Despues de instalar, reinicia este script.
    pause
    exit /b 1
)

echo Node.js encontrado: 
node --version

echo.
echo Verificando npm...
npm --version

echo.
echo Instalando dependencias de React...
npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: No se pudieron instalar las dependencias.
    echo Verifica tu conexion a internet e intenta de nuevo.
    pause
    exit /b 1
)

echo.
echo ============================================
echo  Instalacion completada exitosamente!
echo ============================================
echo.
echo Para iniciar la aplicacion, ejecuta:
echo   npm run dev
echo.
echo La aplicacion se abrira en: http://localhost:3000
echo.
pause