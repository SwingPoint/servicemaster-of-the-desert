@echo off
setlocal
set "GIT=C:\Program Files\Git\bin\git.exe"
set "PATH=C:\Program Files\nodejs;%PATH%"
set "NODE_TLS_REJECT_UNAUTHORIZED=0"
cd /d "%~dp0"

echo ============================================
echo  ServiceMaster - Deploy to GitHub + Vercel
echo ============================================
echo.

if not exist "node_modules\" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo npm install failed.
    pause
    exit /b 1
  )
)

echo --- Step 1: GitHub ---
echo Create an empty repo if you have not already:
echo   https://github.com/new
echo   Name: servicemaster-of-the-desert
echo   Do NOT add README, .gitignore, or license.
echo.
set /p GHUSER=Enter your GitHub username: 
if "%GHUSER%"=="" (
  echo GitHub username required.
  pause
  exit /b 1
)

"%GIT%" remote remove origin 2>nul
"%GIT%" remote add origin https://github.com/%GHUSER%/servicemaster-of-the-desert.git
"%GIT%" branch -M main
"%GIT%" push -u origin main
if errorlevel 1 (
  echo.
  echo GitHub push failed. Sign in when prompted, or use a Personal Access Token.
  pause
  exit /b 1
)

echo.
echo GitHub push complete: https://github.com/%GHUSER%/servicemaster-of-the-desert
echo.

echo --- Step 2: Vercel login ---
echo A browser window will open. Sign in to Vercel.
call npx vercel login
if errorlevel 1 (
  echo Vercel login failed.
  pause
  exit /b 1
)

echo.
echo --- Step 3: Deploy to production ---
call npx vercel --prod --yes
if errorlevel 1 (
  echo Vercel deploy failed.
  pause
  exit /b 1
)

echo.
echo ============================================
echo  Deploy complete!
echo ============================================
echo.
echo Next: In Vercel dashboard add your domain:
echo   www.servicemasterofthedesert.com
echo   servicemasterofthedesert.com
echo.
echo Or import from GitHub for auto-deploys on every push:
echo   https://vercel.com/new
echo.
pause
