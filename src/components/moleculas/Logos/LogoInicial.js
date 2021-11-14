import React from "react";
import { View, StyleSheet } from "react-native";
import TituloApp from "~/components/atomos/Textos/TituloApp";
import Drink from "~/components/atomos/Icones/Drink";

const LogoInicial = () => {
  return (
    <View>
      <Drink />
      <TituloApp estilo={styles.txtStyle} titulo={"Drinkpedia"} />
    </View>
  );
};

export default LogoInicial;

const styles = StyleSheet.create({
  txtStyle: {
    top: -50,
  },
});
