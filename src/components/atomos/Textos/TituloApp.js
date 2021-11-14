import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TituloApp = ({ titulo }) => {
  return <Text style={styles.txt}>{titulo}</Text>;
};

export default TituloApp;

const styles = StyleSheet.create({
  txt: {
    fontSize: 40,
    fontFamily: "sans-serif-thin",
  },
});
