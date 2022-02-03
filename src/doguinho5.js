import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Doguinho = (props) => {
  const [estaFaminto, setEstaFaminto] = useState(true);

  return (
    <View>
      <Text>
        Eu sou {props.name}, e estou {estaFaminto ? "faminto" : "satisfeito"}!
      </Text>
      <Button
        onPress={() => {
          setEstaFaminto(false);
        }}
        disabled={!estaFaminto}
        title={
          estaFaminto ? "Me dê uma melancia por favor!" : "Obrigada mamãe!"
        }
      />
    </View>
  );
};

const Breakfast = () => {
  return (
    <>
      <Doguinho name="Zeus Baiano Menino de Almeida" />
    </>
  );
};

export default Breakfast;
