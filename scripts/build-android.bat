@echo off
echo ===== Building Android App Bundle (AAB) and APK =====

cd %~dp0..

echo.
echo ===== Cleaning Android build =====
cd android
call gradlew clean
cd ..

echo.
echo ===== Building Android App Bundle (AAB) =====
cd android
call gradlew bundleRelease
cd ..

echo.
echo ===== Building Android APK =====
cd android
call gradlew assembleRelease
cd ..

echo.
echo ===== Build Complete =====
echo.
echo AAB file location: android\app\build\outputs\bundle\release\app-release.aab
echo APK file location: android\app\build\outputs\apk\release\app-release.apk
echo.

pause