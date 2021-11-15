import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MainBackground = ({ content }) => {
  return (
    <LinearGradient colors={["#08AEEA", "#2AF598"]} style={styles.background}>
      {content}
    </LinearGradient>
  );
};

export default MainBackground;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
});
