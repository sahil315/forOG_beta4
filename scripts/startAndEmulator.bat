@echo off

rem Start the app in the background
call npm run start

rem Run the emulator
cd "C:\Users\Administrator\AppData\Local\Android\Sdk\emulator"
call emulator.exe -avd Pixel_5_API_34
