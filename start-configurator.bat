@echo off
setlocal
cd /d "%~dp0"
set "PORT=8920"
if not "%~1"=="" set "PORT=%~1"

where py >nul 2>nul
if not errorlevel 1 (
  py -3 scripts\serve.py --port %PORT%
  exit /b
)

where python >nul 2>nul
if not errorlevel 1 (
  python scripts\serve.py --port %PORT%
  exit /b
)

echo Python 3 was not found. Install Python 3 and run this file again.
pause
exit /b 1
