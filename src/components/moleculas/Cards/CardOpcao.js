import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import CardIcons from "~/components/atomos/Icones/CardIcons";
import { width } from "~/components/globais";
import { Texto } from "~/components/tagsEstilizadas";

const CardOpcao = ({ img, txt, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardOpcaoBg}>
        <CardIcons img={img} />
        <Texto>{txt}</Texto>
      </View>
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
    backgroundColor: "#2F0743",
    justifyContent: "space-around",
    margin: 5,
  },
  txtStyle: {
    color: "white",
  },
});
