import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ViewBackground from "~/components/atomos/Backgrounds/ViewBackground";
import CardPesquisaIcons from "~/components/atomos/Icones/CardPesquisaIcons";
import TextoNormal from "~/components/atomos/Textos/TextoNormal";
import TituloCard from "~/components/atomos/Textos/TituloCard";

const CardOpcaoPesquisa = ({ data }) => {
  return (
    <TouchableOpacity>
      <ViewBackground
        estilo={styles.bgView}
        conteudo={
          <View style={styles.cardView}>
            <CardPesquisaIcons img={{ uri: data.strDrinkThumb }} />
            <View style={styles.txtView}>
              <TituloCard titulo={data.strDrink} style={styles.txtEstilo} />
              <TextoNormal
                titulo={data.strCategory}
                estilo={styles.txtEstilo}
              />
              <TextoNormal
                titulo={data.strAlcoholic}
                estilo={styles.txtEstilo}
              />
            </View>
          </View>
        }
      />
    </TouchableOpacity>
  );
};

export default CardOpcaoPesquisa;

const styles = StyleSheet.create({
  bgView: {
    marginVertical: 5,
  },
  cardView: {
    flexDirection: "row",
    margin: 10,
  },
  txtView: {
    left: 10,
    alignItems: "flex-start",
  },
  txtEstilo: {
    fontWeight: "bold",
  },
});
