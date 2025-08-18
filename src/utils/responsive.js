import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Responsive breakpoints
const BREAKPOINTS = {
  XS: 320,
  SM: 480,
  MD: 768,
  LG: 1024,
  XL: 1200,
};

// Device detection
export const isSmallDevice = width < BREAKPOINTS.SM;
export const isMediumDevice = width >= BREAKPOINTS.SM && width < BREAKPOINTS.MD;
export const isLargeDevice = width >= BREAKPOINTS.MD;
export const isTablet = width >= BREAKPOINTS.MD;

// Responsive scaling
const baseWidth = 375; // iPhone 6/7/8 base width
const scale = width / baseWidth;

export const responsive = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

// Responsive font sizes
export const fontSizes = {
  xs: responsive(10),
  sm: responsive(12),
  md: responsive(14),
  lg: responsive(16),
  xl: responsive(18),
  xxl: responsive(20),
  xxxl: responsive(24),
  title: responsive(28),
  hero: responsive(32),
};

// Responsive spacing
export const spacing = {
  xs: responsive(4),
  sm: responsive(8),
  md: responsive(12),
  lg: responsive(16),
  xl: responsive(20),
  xxl: responsive(24),
  xxxl: responsive(32),
};

// Responsive dimensions
export const dimensions = {
  screenWidth: width,
  screenHeight: height,
  cardWidth: isTablet ? width / 2 - spacing.lg * 2 : width - spacing.lg * 2,
  cardHeight: isTablet ? responsive(200) : responsive(180),
  imageHeight: responsive(120),
  buttonHeight: responsive(48),
  inputHeight: responsive(44),
};

// Hero section dimensions
export const HERO_HEIGHT = responsive(250);

// Responsive grid system
export const grid = {
  cols: isTablet ? 2 : 1,
  itemWidth: isTablet ? (width - spacing.lg * 3) / 2 : width - spacing.lg * 2,
  itemMargin: spacing.md,
};

// Device-specific styles
export const deviceStyles = {
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  button: {
    minHeight: responsive(48),
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: responsive(8),
  },
  card: {
    borderRadius: responsive(12),
    padding: spacing.md,
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
  },
};

// Responsive flexbox helpers
export const flex = {
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  col: {
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  between: {
    justifyContent: 'space-between',
  },
  around: {
    justifyContent: 'space-around',
  },
};

// Responsive image sizing
export const imageSizes = {
  thumbnail: responsive(50),
  small: responsive(80),
  medium: responsive(120),
  large: responsive(200),
  hero: responsive(300),
};

// Responsive breakpoints for conditional rendering
export const responsiveBreakpoint = {
  mobile: width < BREAKPOINTS.MD,
  tablet: width >= BREAKPOINTS.MD && width < BREAKPOINTS.LG,
  desktop: width >= BREAKPOINTS.LG,
};

// Orientation detection
export const isPortrait = height > width;
export const isLandscape = width > height;

// Safe area insets
export const safeArea = {
  top: Platform.OS === 'ios' ? 44 : 0,
  bottom: Platform.OS === 'ios' ? 34 : 0,
  left: 0,
  right: 0,
};

// Responsive animation values
export const animations = {
  duration: {
    fast: 150,
    normal: 250,
    slow: 400,
  },
  scale: {
    small: 0.95,
    medium: 0.9,
    large: 0.8,
  },
};

// Performance optimization helpers
export const performance = {
  // Debounce function for search and scroll
  debounce: (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },
  
  // Throttle function for scroll events
  throttle: (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  
  // Memoization helpers
  shouldUpdate: (prevProps, nextProps, keys) => {
    return keys.some(key => prevProps[key] !== nextProps[key]);
  },
};

// Export a named debounce to match imports
export const debounce = performance.debounce;

// Export all utilities
export default {
  responsive,
  fontSizes,
  spacing,
  dimensions,
  grid,
  deviceStyles,
  flex,
  imageSizes,
  responsiveBreakpoint,
  isPortrait,
  isLandscape,
  safeArea,
  animations,
  performance,
};