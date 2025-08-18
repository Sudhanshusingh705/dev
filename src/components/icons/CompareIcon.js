import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CompareIcon = ({ size = 32, color = '#007bff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 11H7V9H9V11ZM13 15H11V13H13V15ZM9 15H7V13H9V15ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM13 11H11V9H13V11ZM17 15H15V13H17V15ZM17 11H15V9H17V11Z"
      fill={color}
    />
  </Svg>
);

export default CompareIcon;