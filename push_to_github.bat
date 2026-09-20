@echo off
title Deploy SRT Sublimation to GitHub
color 0A
echo =======================================================
echo     SRT SUBLIMATION - PUSH AND DEPLOY TO GITHUB
echo =======================================================
echo Target Repository: https://github.com/moaz018/srt
echo Branch: main
echo.

set "GIT_EXE=C:\Users\BEST LAPTOP\AppData\Local\Programs\Git\cmd\git.exe"
if not exist "%GIT_EXE%" (
    where git >nul 2>nul
    if %errorlevel% equ 0 (
        set "GIT_EXE=git"
    ) else (
        echo [ERROR] Git was not found! Please make sure Git is installed.
        pause
        exit /b 1
    )
)

echo [1/3] Staging all files...
"%GIT_EXE%" add -A

echo [2/3] Checking for new commits...
"%GIT_EXE%" commit -m "Deploy latest SRT website and 3D Royal Sample Book updates" --quiet

echo [3/3] Pushing to GitHub (origin main)...
echo.
echo * Note: If a browser window opens, please click 'Sign in with your browser'.
echo.
"%GIT_EXE%" push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo =======================================================
    echo [SUCCESS] Code pushed successfully to GitHub!
    echo.
    echo GitHub will now automatically build and deploy your site:
    echo Repository: https://github.com/moaz018/srt
    echo Live Site:  https://moaz018.github.io/srt/
    echo =======================================================
) else (
    echo.
    echo =======================================================
    echo [NOTICE] Push needs authorization or encountered an issue.
    echo Please check the error message above.
    echo =======================================================
)

echo.
pause
