import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { width } from "~/components/globais";

const ViewBackground = ({ conteudo, estilo }) => {
  return (
    <LinearGradient
      colors={["#1ea869", "#0781ad"]}
      style={[styles.searchBarView, estilo]}
    >
      {conteudo}
    </LinearGradient>
  );
};

export default ViewBackground;

const styles = StyleSheet.create({
  searchBarView: {
    borderRadius: 25,
    width: width / 1.2,
  },
});
