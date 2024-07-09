import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";

type ProductDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "ProductDetail"
>;

const ProductDetailScreen: React.FC = () => {
  const route = useRoute<ProductDetailScreenRouteProp>();
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.id}>ID: {product.id}</Text>
      <Text style={styles.sectionTitle}>Información extra</Text>
      <Text style={styles.label}>Nombre</Text>
      <Text>{product.name}</Text>
      <Text style={styles.label}>Descripción</Text>
      <Text>{product.description}</Text>
      <Text style={styles.label}>Logo</Text>
      <Image source={{ uri: product.logo }} style={styles.logo} />
      <Text style={styles.label}>Fecha liberación</Text>
      <Text>{product.date_release}</Text>
      <Text style={styles.label}>Fecha revisión</Text>
      <Text>{product.date_revision}</Text>
      <Button title="Editar" onPress={() => {}} />
      <Button title="Eliminar" onPress={() => {}} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  id: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  logo: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
});

export default ProductDetailScreen;
