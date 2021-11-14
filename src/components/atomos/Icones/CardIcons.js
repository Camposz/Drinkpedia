import React from "react";
import { StyleSheet, Image } from "react-native";

const CardIcons = ({ img }) => {
  return <Image style={styles.img} source={img} />;
};

export default CardIcons;

const styles = StyleSheet.create({
  img: {},
});
