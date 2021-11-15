import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import LogoInicial from "~/components/moleculas/Logos/LogoInicial";
import CardOpcao from "~/components/moleculas/Cards/CardOpcao";
import MainBackground from "~/components/atomos/Backgrounds/MainBackground";

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

const Home = ({navigation}) => {
  return (
    <MainBackground
      content={
        <View style={styles.homeView}>
          <LogoInicial />
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => {
              return <CardOpcao img={item.img} txt={item.txt}onPress={()=> navigation.navigate("PesquisaDrinks")}/>;
            }}
          />
        </View>
      }
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  homeView: {
    alignItems: "center",
  },
});
