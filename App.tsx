import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductListScreen from "./src/screens/ProductListScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import { RootStackParamList } from "./src/types";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{ title: "BANCO" }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{ title: "BANCO" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
