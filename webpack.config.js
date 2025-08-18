const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Handle platform-specific imports
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-native$': 'react-native-web',
    'react-native/Libraries/PermissionsAndroid': path.resolve(__dirname, 'src/utils/emptyModule.js'),
  };

  // Add support for vector icons
  config.module.rules.push({
    test: /\.ttf$/,
    use: {
      loader: 'url-loader',
    },
  });

  // Ensure JSON files are properly handled
  config.module.rules.push({
    test: /\.json$/,
    type: 'json',
  });

  // Mock native modules for web
  config.resolve.fallback = {
    ...config.resolve.fallback,
    'react-native/Libraries/PermissionsAndroid': false,
  };

  return config;
};