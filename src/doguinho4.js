import React from "react";
import { Text, View, Image } from "react-native";

const DogImage = () => {
  return (
    <View>
      <Image
        source={require("./images/zeus.jpeg")}
        style={{ width: 200, height: 200 }}
      />
      <Text>Hello, I love you so much...</Text>
    </View>
  );
};

export default DogImage;
