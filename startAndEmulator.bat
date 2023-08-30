@echo off

@REM rem Start the app in the background
call npm run start && cd "C:\Users\Administrator\AppData\Local\Android\Sdk\emulator"
call emulator.exe -avd Pixel_5_API_34

