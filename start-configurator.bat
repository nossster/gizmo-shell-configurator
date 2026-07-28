@echo off
setlocal EnableExtensions EnableDelayedExpansion
cd /d "%~dp0"

set "PORT=8920"
if not "%~1"=="" set "PORT=%~1"
set "GIZMO_CLIENT_UI_SOURCE_HINT=%GIZMO_CLIENT_UI_SOURCE%"

set "PYTHON_CMD="
where py >nul 2>nul
if not errorlevel 1 set "PYTHON_CMD=py -3"

if "%PYTHON_CMD%"=="" (
  where python >nul 2>nul
  if not errorlevel 1 set "PYTHON_CMD=python"
)

if "%PYTHON_CMD%"=="" (
  echo Python 3 was not found. Install Python 3 and run this file again.
  pause
  exit /b 1
)

echo Checking Real Host.Web preview runtime...
%PYTHON_CMD% scripts\sync-real-client.py --check --require-demo-login >nul 2>nul
if errorlevel 1 (
  call :find_source_root
  if "!GIZMO_CLIENT_UI_SOURCE!"=="" (
    echo.
    echo Real Host.Web runtime is missing and full Gizmo.Client.UI sources were not found.
    echo Expected one of these folders next to this configurator:
    echo   ..\Gizmo.Client.UI
    echo   ..\Gizmo.Client.UI-full
    echo.
    echo Clone it once with:
    echo   git clone --recursive https://github.com/GAMP/Gizmo.Client.UI.git ..\Gizmo.Client.UI-full
    echo.
    pause
    exit /b 1
  )

  echo Real Host.Web runtime is missing or incomplete.
  echo Building it from "!GIZMO_CLIENT_UI_SOURCE!".
  echo This can take several minutes on the first run.
  %PYTHON_CMD% scripts\build-real-client.py --source-root "!GIZMO_CLIENT_UI_SOURCE!"
  if errorlevel 1 (
    echo.
    echo Failed to build Real Host.Web runtime.
    pause
    exit /b 1
  )
)

echo Starting Gizmo Theme Configurator on http://127.0.0.1:%PORT%/
%PYTHON_CMD% scripts\serve.py --port %PORT%
exit /b

:find_source_root
set "GIZMO_CLIENT_UI_SOURCE="

if not "%GIZMO_CLIENT_UI_SOURCE_HINT%"=="" (
  call :try_source "%GIZMO_CLIENT_UI_SOURCE_HINT%"
  if not "!GIZMO_CLIENT_UI_SOURCE!"=="" exit /b
)

call :try_source "%~dp0..\Gizmo.Client.UI"
if not "%GIZMO_CLIENT_UI_SOURCE%"=="" exit /b

call :try_source "%~dp0..\Gizmo.Client.UI-full"
if not "%GIZMO_CLIENT_UI_SOURCE%"=="" exit /b

call :try_source "%~dp0..\Gizmo.Client.UI-main"
if not "%GIZMO_CLIENT_UI_SOURCE%"=="" exit /b

exit /b

:try_source
if not exist "%~1\Gizmo.Client.UI.Host.Web\Gizmo.Client.UI.Host.Web.csproj" exit /b
if not exist "%~1\Submodules\Gizmo.Client.UI.Services\Gizmo.Client.UI.Services\Client\TestClient.cs" exit /b
set "GIZMO_CLIENT_UI_SOURCE=%~f1"
exit /b
