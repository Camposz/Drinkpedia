import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import CardIcons from "~/components/atomos/Icones/CardIcons";
import TituloCard from "~/components/atomos/Textos/TituloCard";
import { width } from "~/components/globais";

const CardOpcao = ({ img, txt, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#1ea869", "#0781ad"]}
        style={styles.cardOpcaoBg}
      >
        <CardIcons img={img} />
        <TituloCard titulo={txt} style={styles.txtStyle} cor={"white"} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CardOpcao;

const styles = StyleSheet.create({
  cardOpcaoBg: {
    alignItems: "center",
    width: width / 3,
    height: width / 2.8,
    borderRadius: 18,
    backgroundColor: "orange",
    justifyContent: "space-around",
    margin: 5,
  },
  txtStyle: {
    color: "white",
  },
});
