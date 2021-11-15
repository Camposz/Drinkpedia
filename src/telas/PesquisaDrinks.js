import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { requestPesquisaDrink } from "~/api/PesquisaDrinkService";
import MainBackground from "~/components/atomos/Backgrounds/MainBackground";
import SearchBarPadrao from "~/components/atomos/SearchBars/SearchBarPadrao";
import CardOpcaoPesquisa from "~/components/moleculas/Cards/CardOpcaoPesquisa";

const passarDados = async (setResultadoApi, searchQuery) => {
  var resultado = await requestPesquisaDrink(searchQuery);
  setResultadoApi(resultado.drinks);
};

const PesquisaDrinks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [resultadoApi, setResultadoApi] = useState({});

  return (
    <MainBackground
      estilo={styles.pageBg}
      content={
        <View style={styles.view}>
          <SearchBarPadrao
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onChangeText={passarDados(setResultadoApi, searchQuery)}
          />
          <FlatList
            data={resultadoApi}
            keyExtractor={(item) => item.idDrink}
            renderItem={({ item }) => {
              return <CardOpcaoPesquisa data={item}/>;
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      }
    />
  );
};

export default PesquisaDrinks;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 0.95,
  },

  pageBg: {
    justifyContent: "flex-end",
  },
});
