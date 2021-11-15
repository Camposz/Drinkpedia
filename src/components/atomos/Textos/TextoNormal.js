import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fontScale } from "~/components/globais";

const TextoNormal = ({ titulo, estilo }) => {
  return <Text style={[styles.txt, estilo]}>{titulo}</Text>;
};

export default TextoNormal;

const styles = StyleSheet.create({
  txt: {
    fontSize: 13 / fontScale,
    fontFamily: "sans-serif-thin",
  },
});
