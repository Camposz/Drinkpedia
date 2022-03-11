import React, { useEffect, useState } from "react";
import { StyleSheet, Image, ScrollView, View } from "react-native";
import {
  Fundo,
  SubTitulo,
  Texto,
  CardGradient,
} from "~/components/tagsEstilizadas";
import { SafeAreaView } from "react-native-safe-area-context";
import { URL_API_DRINK_ID } from "@env";
import axios from "axios";
import { height, width } from "~/components/globais";

const circulo = width / 2.5;

const InfoDrink = ({ id, qtd, nome }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Texto>
        {id}. {nome}
      </Texto>
      <Texto>{qtd}</Texto>
    </View>
  );
};

const DetalhaDrinks = ({ route: { params } }) => {
  const [data, setData] = useState(null);
  const [ingredientes, setIngredientes] = useState([]);

  const formataArrIngredientes = (item) => {
    let ingredientesArr = [];

    for (let i = 1; i <= 15; i++) {
      if (item[`strIngredient${i}`] != null && item[`strIngredient${i}`] != "")
        ingredientesArr.push({
          nome: item[`strIngredient${i}`],
          qtd: item[`strMeasure${i}`],
          id: i,
        });
    }

    return ingredientesArr;
  };

  useEffect(() => {
    axios.get(`${URL_API_DRINK_ID}` + params).then((res) => {
      setData(res.data.drinks[0]);
      console.log(res.data.drinks[0]);
      setIngredientes(formataArrIngredientes(res.data.drinks[0]));
    });
  }, []);

  return (
    <Fundo>
      <SafeAreaView style={styles.homeView}>
        {data && (
          <>
            <ScrollView>
              <View style={{ alignItems: "center", marginBottom: 10 }}>
                <Image
                  style={styles.img}
                  source={{
                    uri: data.strDrinkThumb,
                  }}
                  resizeMode="contain"
                />
                <SubTitulo>{data.strDrink}</SubTitulo>
                <Texto>
                  {data.strCategory} - {data.strAlcoholic}
                </Texto>
              </View>
              <CardGradient
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                {ingredientes.map((item, index) => {
                  return (
                    <InfoDrink
                      key={index}
                      nome={item.nome}
                      id={item.id}
                      qtd={item.qtd}
                    />
                  );
                })}
              </CardGradient>
              <CardGradient>
                <Texto>{data.strInstructions}</Texto>
              </CardGradient>
            </ScrollView>
          </>
        )}
      </SafeAreaView>
    </Fundo>
  );
};

export default DetalhaDrinks;

const styles = StyleSheet.create({
  homeView: {
    flex: 1,
    padding: 15,
  },
  img: {
    width: circulo,
    height: circulo,
    borderRadius: (width + height) / 2,
  },
});
