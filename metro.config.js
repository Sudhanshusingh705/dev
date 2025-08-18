const { getDefaultConfig } = require('@react-native/metro-config');
const path = require('path');

// Get the default config
const config = getDefaultConfig(__dirname);

// Add custom configuration
config.resolver.extraNodeModules = {
  '@constants': path.resolve(__dirname, 'src/constants'),
  '@components': path.resolve(__dirname, 'src/components'),
  '@screens': path.resolve(__dirname, 'src/screens'),
  '@navigation': path.resolve(__dirname, 'src/navigation'),
  '@api': path.resolve(__dirname, 'src/api'),
  '@assets': path.resolve(__dirname, 'src/assets'),
};

// Add support for native modules
config.resolver.sourceExts = ['jsx', 'js', 'ts', 'tsx', 'json'];

module.exports = config;
