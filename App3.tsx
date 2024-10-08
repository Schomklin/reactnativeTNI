import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Alert} from "react-native";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import AppFooter from "./components/AppFooter";
import { stylesPractice } from "./styles/styles";

function App(): React.JSX.Element {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("Message from App.tsx");
  const [footerMessage, setFooterMessage] = useState(
    "Thai-Nichi Institute of Technology"
  );

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  useEffect(() => {
    console.log(`Fullname has changed to : ${fullname}`);
  }, [fullname]); //This will run whenever 'fullname' changes

  const handleButtonClick = () => {
    Alert.alert("Hello",`Input your fullname : ${fullname}`);
  };

  return (
    <View style={styles.container}>
      <AppHeader fullname={fullname} message={message} />
      {/* <Content message={message} fullname={fullname} /> */}
      <Content message={message} onButtonClick = {handleButtonClick} />
      <AppFooter footerMessage={footerMessage} />
      <TextInput
        style={stylesPractice.input}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: "space-between",
  },
});

export default App;
