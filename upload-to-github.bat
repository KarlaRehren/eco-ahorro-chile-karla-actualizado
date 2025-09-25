@echo off
echo ============================================
echo  GitHub Upload Helper
echo ============================================
echo.
echo Before running this script, make sure you have:
echo 1. Created a repository on GitHub.com named: eco-ahorro-chile-react
echo 2. Know your GitHub username
echo.
set /p username="Enter your GitHub username: "
echo.
echo Setting up Git remote...
git remote add origin https://github.com/%username%/eco-ahorro-chile-react.git
echo.
echo Pushing to GitHub...
git push -u origin main
echo.
if %errorlevel% equ 0 (
    echo ============================================
    echo  SUCCESS! Your repository is now on GitHub
    echo ============================================
    echo.
    echo Repository URL: https://github.com/%username%/eco-ahorro-chile-react
    echo.
) else (
    echo ============================================
    echo  ERROR: Something went wrong
    echo ============================================
    echo.
    echo Make sure:
    echo 1. You created the repository on GitHub
    echo 2. Your username is correct
    echo 3. You're signed in to Git (run: git config --global user.name "Your Name")
    echo.
)
pause