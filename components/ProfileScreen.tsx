import { Text, View, Image, Button } from "react-native";
import React, { useState } from "react";
import {styles} from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/profileImage.jpg");
  const newProfileImage = require("../assets/newProfileImage.png");

  const [name, setName] = useState("Amonpan Chomklin");
  const [image, setImage] = useState(profileImage);

  const handleChangeName = () => {
    setName(name == "Amonpan Chomklin" ? "No Name" : "Amonpan Chomklin");    
  };

  const handleChangeImage = () => {
    // setImage(newProfileImage);
    setImage(image==profileImage?newProfileImage:profileImage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={image} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Button title="Change Name" onPress={handleChangeName} />
          <Text>{"\n"}</Text>
          <Button title="Change Image" onPress={handleChangeImage}/>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
