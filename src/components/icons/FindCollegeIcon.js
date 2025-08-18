import React from 'react';
import Svg, { Path } from 'react-native-svg';

const FindCollegeIcon = ({ size = 32, color = '#007bff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 13.5 7.62 13.5 9 12.38 11.5 12 11.5Z"
      fill={color}
    />
  </Svg>
);

export default FindCollegeIcon;