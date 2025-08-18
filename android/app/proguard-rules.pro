# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# React Native
-keep class com.facebook.react.** { *; }
-keep class com.facebook.react.bridge.** { *; }
-keep class com.facebook.react.views.** { *; }
-keep class com.facebook.react.modules.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# React Native Reanimated
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# React Native
-keep class com.facebook.react.** { *; }
-keep class com.facebook.react.bridge.** { *; }
-keep class com.facebook.react.modules.** { *; }
-keep class com.facebook.react.views.** { *; }
-keep class com.facebook.react.uimanager.** { *; }
-keep class com.facebook.react.common.** { *; }

# Hermes
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.react.jscexecutor.** { *; }

# Android
-keep class android.** { *; }
-keep class androidx.** { *; }
-keep class com.google.android.** { *; }

# React Native Screens
-keep class com.swmansion.rnscreens.** { *; }

# React Native Vector Icons
-keep class com.oblador.vectoricons.** { *; }

# Async Storage
-keep class com.reactnativecommunity.asyncstorage.** { *; }

# NetInfo
-keep class com.reactnativecommunity.netinfo.** { *; }

# Image Picker
-keep class com.imagepicker.** { *; }

# Share
-keep class cl.json.** { *; }

# Linear Gradient
-keep class com.BV.LinearGradient.** { *; }

# SVG
-keep class com.horcrux.svg.** { *; }

# Prevent crashes from missing classes
-dontwarn **
-keepattributes *Annotation*
-keepattributes SourceFile,LineNumberTable
-keepattributes Signature
-keepattributes Exceptions
-keepattributes *Annotation*
-keepattributes EnclosingMethod
-keepattributes InnerClasses
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes Synthetic
-keepattributes Signature
-keepattributes *Annotation*
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes Exceptions
-keepattributes InnerClasses
-keepattributes EnclosingMethod
-keepattributes Deprecated
-keepattributes SourceFile,LineNumberTable

# React Native Screens
-keep class com.swmansion.rnscreens.** { *; }

# React Native Vector Icons
-keep class com.oblador.vectoricons.** { *; }

# React Native Async Storage
-keep class com.reactnativecommunity.asyncstorage.** { *; }

# React Native NetInfo
-keep class com.reactnativecommunity.netinfo.** { *; }

# React Native Image Picker
-keep class com.imagepicker.** { *; }

# React Native Share
-keep class cl.json.** { *; }

# React Native Linear Gradient
-keep class com.BV.LinearGradient.** { *; }

# React Native SVG
-keep class com.horcrux.svg.** { *; }

# Hermes
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.react.jscexecutor.** { *; }

# General
-keepattributes *Annotation*
-keepattributes Signature
-keepattributes SourceFile,LineNumberTable
-keep class * extends com.facebook.react.ReactActivity { *; }
-keep class * implements com.facebook.react.ReactPackage { *; }

# Prevent crash from missing classes
-dontwarn com.facebook.react.**
-dontwarn com.swmansion.**
-dontwarn com.oblador.**
-dontwarn com.reactnativecommunity.**
-dontwarn com.imagepicker.**
-dontwarn cl.json.**
-dontwarn com.BV.**
-dontwarn com.horcrux.**
