import React from 'react';
import Svg, { Path } from 'react-native-svg';

const RankingIcon = ({ size = 32, color = '#007bff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2L13.09 8.26L18 7L15.45 12.53L20 16L13.55 15.74L11 21L10.09 14.74L5 16L7.55 10.47L3 7L9.45 7.26L12 2Z"
      fill={color}
    />
  </Svg>
);

export default RankingIcon;