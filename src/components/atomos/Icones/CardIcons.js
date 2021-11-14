import React from "react";
import { StyleSheet, Image } from "react-native";
import { height, width } from "~/components/globais";

const CardIcons = ({ img }) => {
  return <Image style={styles.img} source={img} resizeMode={"contain"} />;
};

export default CardIcons;

const dimensao = width / 8;

const styles = StyleSheet.create({
  img: {
    width: dimensao,
    height: dimensao,
  },
});
