import React from "react";
import { Text } from "react-native";
import { Home, ListaDrinks, DetalhaDrinks } from "./src/telas";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ListaDrinks"
            component={ListaDrinks}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetalhaDrinks"
            component={DetalhaDrinks}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Text style={{ alignSelf: "center", position: "absolute", bottom: 0 }}>
        Made with love by Camposz ❤️
      </Text>
    </>
  );
}
