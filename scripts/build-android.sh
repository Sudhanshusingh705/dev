#!/bin/bash

echo "===== Building Android App Bundle (AAB) and APK ====="

# Navigate to project root
cd "$(dirname "$0")/.." || exit

echo
echo "===== Cleaning Android build ====="
cd android || exit
./gradlew clean
cd .. || exit

echo
echo "===== Building Android App Bundle (AAB) ====="
cd android || exit
./gradlew bundleRelease
cd .. || exit

echo
echo "===== Building Android APK ====="
cd android || exit
./gradlew assembleRelease
cd .. || exit

echo
echo "===== Build Complete ====="
echo
echo "AAB file location: android/app/build/outputs/bundle/release/app-release.aab"
echo "APK file location: android/app/build/outputs/apk/release/app-release.apk"
echo