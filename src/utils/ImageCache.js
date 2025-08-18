import { Image } from 'react-native';

// Image caching configuration
const ImageCache = {
  // Cache key for storing image URLs
  cache: new Map(),
  
  // Default image sources for placeholders
  placeholders: {
    college: require('../assets/images/college-placeholder.png'),
    logo: require('../assets/images/logo-placeholder.png'),
    avatar: require('../assets/images/avatar-placeholder.png'),
  },

  // Preload critical images
  preloadImages: function(imageSources) {
    imageSources.forEach(source => {
      if (typeof source === 'string') {
        Image.prefetch(source);
      } else if (source && source.uri) {
        Image.prefetch(source.uri);
      }
    });
  },

  // Get cached image with fallback
  getCachedImage: function(uri, type = 'college') {
    if (!uri) {
      return this.placeholders[type] || this.placeholders.college;
    }

    // Check if already cached
    if (this.cache.has(uri)) {
      return { uri: this.cache.get(uri) };
    }

    // Cache the URI
    this.cache.set(uri, uri);
    return { uri };
  },

  // Clear cache when needed
  clearCache: function() {
    this.cache.clear();
  },

  // Get cache size
  getCacheSize: function() {
    return this.cache.size;
  }
};

export default ImageCache;