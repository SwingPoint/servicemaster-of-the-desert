@echo off
set "GIT=C:\Program Files\Git\bin\git.exe"
cd /d "%~dp0"

echo ============================================
echo  Push ServiceMaster site to GitHub
echo ============================================
echo.
echo 1. Open this URL and create a NEW empty repo:
echo    https://github.com/new
echo.
echo    Repository name: servicemaster-of-the-desert
echo    Visibility: Private or Public (your choice)
echo    IMPORTANT: Do NOT add README, .gitignore, or license.
echo.
pause

set /p GHUSER=Enter your GitHub username: 

"%GIT%" remote remove origin 2>nul
"%GIT%" remote add origin https://github.com/%GHUSER%/servicemaster-of-the-desert.git
"%GIT%" branch -M main
"%GIT%" push -u origin main

if errorlevel 1 (
  echo.
  echo Push failed. Common fixes:
  echo - Sign in to GitHub in Git Credential Manager when prompted
  echo - Or use a Personal Access Token as your password
  echo - Confirm the repo name matches exactly
  pause
  exit /b 1
)

echo.
echo ============================================
echo  GitHub push complete!
echo ============================================
echo.
echo Next: Deploy on Vercel
echo 1. Go to https://vercel.com/new
echo 2. Sign in with GitHub
echo 3. Import: servicemaster-of-the-desert
echo 4. Click Deploy (defaults are fine for Next.js)
echo 5. After deploy: Settings ^> Domains ^> add:
echo    www.servicemasterofthedesert.com
echo    servicemasterofthedesert.com
echo 6. Update DNS at your registrar using Vercel's instructions
echo.
pause
