import React from "react";
import { Text, View } from "react-native";

const Dog = (props) => {
  return (
    <View>
      <Text>Ei família eu me chamo... {props.name}!</Text>
    </View>
  );
};

const Alias = () => {
  return (
    <View>
      <Dog name="Zeus" />
      <Dog name="Zeuszinho" />
      <Dog name="Baiano" />
    </View>
  );
};

export default Alias;
