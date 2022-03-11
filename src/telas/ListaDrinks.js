import React, { useState, useEffect } from "react";
import {
  Fundo,
  CardGradient,
  SubTitulo,
  Texto,
} from "~/components/tagsEstilizadas";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { URL_API_DRINK_NAME } from "@env";
import axios from "axios";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { height, width } from "~/components/globais";

const circulo = width / 4;

const CardDrinks = ({ imagem, titulo, categoria, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CardGradient>
        <Image
          style={styles.img}
          source={{
            uri: imagem,
          }}
          resizeMode="contain"
        />
        <View style={styles.cardTituloView}>
          <SubTitulo>{titulo}</SubTitulo>
          <Texto>{categoria}</Texto>
        </View>
      </CardGradient>
    </TouchableOpacity>
  );
};

const ListaDrinks = ({ navigation: { navigate } }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${URL_API_DRINK_NAME}` + searchQuery).then((res) => {
      setData(res.data.drinks);
    });
  }, [searchQuery]);

  return (
    <Fundo>
      <SafeAreaView style={styles.bg}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          selectionColor={"gray"}
        />
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index}
          renderItem={({ item }) => (
            <CardDrinks
              onPress={() => navigate("DetalhaDrinks", item.idDrink)}
              imagem={item.strDrinkThumb}
              titulo={item.strDrink}
              categoria={item.strAlcoholic}
            />
          )}
        />
      </SafeAreaView>
    </Fundo>
  );
};

export default ListaDrinks;

const styles = StyleSheet.create({
  img: {
    width: circulo,
    height: circulo,
    borderRadius: (width + height) / 2,
  },
  cardTituloView: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
  },
  bg: { flex: 1, paddingHorizontal: 20 },
});
