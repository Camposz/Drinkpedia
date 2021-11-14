import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LogoInicial from "~/components/moleculas/Logos/LogoInicial";
import CardOpcao from "~/components/moleculas/Cards/CardOpcao";

const data = [
  {
    id: 1,
    img: require("~/assets/Icones/drink.png"),
    txt: "Pesquisar Drinks",
  },
  {
    id: 2,
    img: require("~/assets/Icones/liquor.png"),
    txt: "Pesquisar Ingredientes",
  },
  {
    id: 3,
    img: require("~/assets/Icones/box.png"),
    txt: "Sugestão Aleatória",
  },
  {
    id: 4,
    img: require("~/assets/Icones/like.png"),
    txt: "Favoritos",
  },
];

const Home = () => {
  return (
    <LinearGradient colors={["#08AEEA", "#2AF598"]} style={styles.background}>
      <View style={styles.homeView}>
        <LogoInicial />
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return <CardOpcao img={item.img} txt={item.txt} />;
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  homeView: {
    alignItems: "center",
  },
});
