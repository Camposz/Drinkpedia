import React from "react";
import { StyleSheet, Text } from "react-native";
import { fontScale } from "~/components/globais";

const TituloCard = ({ titulo, style }) => {
  return <Text style={[styles.txt, style]}>{titulo}</Text>;
};

export default TituloCard;

const styles = StyleSheet.create({
  txt: {
    fontSize: 18 / fontScale,
    fontFamily: "sans-serif-thin",
    textAlign: "center",
  },
});
