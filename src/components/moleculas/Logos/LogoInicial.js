import React from "react";
import { View } from "react-native";
import Drink from "~/components/atomos/Icones/Drink";
import { Titulo } from "~/components/tagsEstilizadas";

const LogoInicial = () => {
  return (
    <View style={{alignItems: `center`, top: -50}}>
      <Drink />
      <Titulo>Drinkpedia</Titulo>
    </View>
  );
};

export default LogoInicial;

