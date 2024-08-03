import React from "react";
import { View, Text, Button, Alert} from "react-native";
import { stylesPractice} from '../styles/styles';

interface ContentProps {
  message: string;
  title: string;
}

const Content: React.FC<ContentProps> = ({ title, message }) => {
  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Button title="Click Me" onPress={() => Alert.alert("Hello", title)} />
    </View>
  );
};

export default Content;
