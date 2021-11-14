import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LogoInicial from "~/components/moleculas/Logos/LogoInicial";
import CardIcons from "~/components/atomos/Icones/CardIcons";



const Home = () => {
  return (
    <>
      <LinearGradient colors={["#08AEEA", "#2AF598"]} style={styles.background}>
        <LogoInicial />
        {/* <CardIcons imagem={"../assets/Icones/drink.png"}/> */}
      </LinearGradient>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
