import React from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import ViewBackground from "../Backgrounds/ViewBackground";

const SearchBarPadrao = ({ searchQuery, setSearchQuery, onChangeText }) => {
  const onChangeSearch = async (query) => {
    setSearchQuery(query);
    onChangeText;
  };

  return (
    <ViewBackground
      conteudo={
        <Searchbar
          placeholder="Pesquise um Drink  🍸"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
      }
    />
  );
};

export default SearchBarPadrao;

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "transparent",
    elevation: 0,
  },
});
