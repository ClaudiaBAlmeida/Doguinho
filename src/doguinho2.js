import React from "react";
import { Text, TextInput, View } from "react-native";

const Dog2 = () => {
  return (
    <View>
      <Text>Ei, mãe eu me chamo...</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1
        }}
        defaultValue="Digite meu nome aqui rs..."
      />
    </View>
  );
};

export default Dog2;
