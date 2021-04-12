import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

type AntIconProps = {
  name: 'left' | 'right' | 'rest' | 'close' | 'eye' | 'eyeo';
  color: string;
  size: number;
};

const AntIcon = ({name, color, size}: AntIconProps) => (
  <Icon name={name} color={color} size={size} />
);

export default AntIcon;
