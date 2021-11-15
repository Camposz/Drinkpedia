import React from "react";
import { StyleSheet, Image } from "react-native";
import { height, width } from "~/components/globais";

const CardPesquisaIcons = ({ img }) => {
  return <Image style={styles.img} source={img} resizeMode={"contain"} />;
};

export default CardPesquisaIcons;

const dimensao = width / 5;

const styles = StyleSheet.create({
  img: {
    width: dimensao,
    height: dimensao,
    borderRadius: height + width / 2,
  },
});
