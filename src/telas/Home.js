import React from "react";
import { FlatList, StyleSheet } from "react-native";
import LogoInicial from "~/components/moleculas/Logos/LogoInicial";
import CardOpcao from "~/components/moleculas/Cards/CardOpcao";
import { Fundo } from "~/components/tagsEstilizadas";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    img: require("~/assets/Icones/drink.png"),
    txt: "Search Drinks",
    rota: "ListaDrinks",
  },
];

const Home = ({ navigation: { navigate } }) => {
  return (
    <Fundo>
      <SafeAreaView style={styles.homeView}>
        <LogoInicial />
        {/* FlatList para caso futuraente decida adicionar mais opcoes no menu */}
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
                onPress={() => navigate(item.rota)}
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
