import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MainBackground from "~/components/atomos/Backgrounds/MainBackground";
import SearchBarPadrao from "~/components/atomos/SearchBars/SearchBarPadrao";
import { width } from "~/components/globais";
import prodEnvVariable from "~/config/env";

const requestApi = () => {};

const PesquisaDrinks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <MainBackground
      content={
        <View>
          <SearchBarPadrao
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onChangeText={console.log(prodEnvVariable)}
          />
        </View>
      }
    />
  );
};

export default PesquisaDrinks;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "transparent",
    elevation: 0,
  },
  searchBarView: {
    borderRadius: 25,
    width: width / 1.2,
  },
});
