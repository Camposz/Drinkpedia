import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TituloApp from "~/components/atomos/Textos/TituloApp";
import Drink from "~/components/atomos/Icones/Drink";
import { height, width } from "../../globais";

const LogoInicial = () => {
  return (
    <View style={styles.bg}>
      <Drink />
      <TituloApp titulo={"Drinkpedia"} />
    </View>
  );
};

export default LogoInicial;

const styles = StyleSheet.create({
    bg:{
        height: height * 0.2
    }
});
