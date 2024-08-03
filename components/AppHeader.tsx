import React from 'react';
import { View, Text } from 'react-native';
import { stylesPractice} from '../styles/styles';

interface AppHeaderProps {
  title: string;
  subtitle: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={stylesPractice.header}>
      <Text style={stylesPractice.headerText}>{title}</Text>
      <Text style={stylesPractice.subtitleText}>{subtitle}</Text>
    </View>
  );
};

export default AppHeader;
