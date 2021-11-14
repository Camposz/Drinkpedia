import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fontScale } from "~/components/globais";

const TituloApp = ({ titulo, estilo }) => {
  return <Text style={[styles.txt, estilo]}>{titulo}</Text>;
};

export default TituloApp;

const styles = StyleSheet.create({
  txt: {
    fontSize: 40 / fontScale,
    fontFamily: "sans-serif-thin",
  },
});
