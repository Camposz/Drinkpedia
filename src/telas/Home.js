import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import LogoInicial from "~/components/moleculas/Logos/LogoInicial";
import CardOpcao from "~/components/moleculas/Cards/CardOpcao";
import { Fundo } from "~/components/tagsEstilizadas";
import { SafeAreaView } from "react-native-safe-area-context";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const data = [
  {
    id: 1,
    img: require("~/assets/Icones/drink.png"),
    txt: "Pesquisar Drinks",
    rota: "ListaDrinks",
  },
  {
    id: 2,
    img: require("~/assets/Icones/box.png"),
    txt: "Sugestão Aleatória",
    rota: "ListaDrinks",
  },
  {
    id: 3,
    img: require("~/assets/Icones/like.png"),
    txt: "Favoritos",
    rota: "ListaDrinks",
  },
];

const Home = ({ navigation }) => {
  return (
    <Fundo>
      <SafeAreaView style={styles.homeView}>
        <LogoInicial />
        <FlatList
          data={data}
          contentContainerStyle={{ alignItems: "center" }}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <CardOpcao
                img={item.img}
                txt={item.txt}
                onPress={() => navigation.navigate(item.rota)}
              />
            );
          }}
        />
      </SafeAreaView>
    </Fundo>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
