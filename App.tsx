import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from './components/AppFooter';

export default function App():React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
      <Button
        title="Click Me"
        onPress={() => {
          Alert.alert("Hi", "React Native is Fun!!");
        }}
      />
      <AppFooter/>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
