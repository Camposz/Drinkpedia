import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MainBackground = ({ content, estilo }) => {
  return (
    <LinearGradient
      colors={["#08AEEA", "#2AF598"]}
      style={[styles.background, estilo]}
    >
      {content}
    </LinearGradient>
  );
};

export default MainBackground;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
