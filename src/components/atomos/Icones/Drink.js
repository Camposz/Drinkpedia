import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { height, width } from "../../globais";


const Drink = () => {
  return (
    <LottieView style={styles.drinkLogo} source={require("~/assets/Lottie/drink.json")} autoPlay loop />
  );
};

export default Drink;

const styles = StyleSheet.create({
  drinkLogo: {
    width: width / 2,
    height: height / 4,
    position:'absolute'
  },
});
