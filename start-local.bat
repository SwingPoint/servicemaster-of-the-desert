@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"

if not exist "node_modules\" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo npm install failed. See .npmrc SSL note in project folder.
    pause
    exit /b 1
  )
)

echo.
echo Starting site at http://localhost:3001
echo Keep this window OPEN while viewing the site.
echo Press Ctrl+C to stop the server.
echo.

npm run dev

pause
