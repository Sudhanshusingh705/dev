import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ExamIcon = ({ size = 32, color = '#007bff' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V15H9V17ZM9 13H7V11H9V13ZM9 9H7V7H9V9ZM13 17H11V15H13V17ZM13 13H11V11H13V13ZM13 9H11V7H13V9ZM17 17H15V15H17V17ZM17 13H15V11H17V13ZM17 9H15V7H17V9Z"
      fill={color}
    />
  </Svg>
);

export default ExamIcon;