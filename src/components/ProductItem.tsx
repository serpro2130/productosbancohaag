import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Product } from "../types";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.id}>ID: {product.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontSize: 16,
  },
  id: {
    fontSize: 14,
    color: "#666",
  },
});

export default ProductItem;
