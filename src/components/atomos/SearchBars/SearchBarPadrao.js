import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { width } from "~/components/globais";

const SearchBarPadrao = ({ searchQuery, setSearchQuery, onChangeText }) => {
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    onChangeText;
  };

  return (
    <LinearGradient
      colors={["#1ea869", "#0781ad"]}
      style={styles.searchBarView}
    >
      <Searchbar
        placeholder="Pesquise um Drink  🍸"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
    </LinearGradient>
  );
};

export default SearchBarPadrao;

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
