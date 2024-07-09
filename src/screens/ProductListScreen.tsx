import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  ListRenderItem,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ProductItem from "../components/ProductItem";
import { RootStackParamList, Product } from "../types";

const ProductListScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  interface IProduct {
    id: string;
    name: string;
    description: string;
    logo: string;
  }
  useEffect(() => {
    const fetchProducts = () => {
      fetch(
        "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json;charset=UTF-8",
            authorId: "1",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProducts(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // if (loading) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Cargando productos...</Text>
  //     </View>
  //   );
  // }

  // if (error) {
  //   return (
  //     <View style={styles.container}>
  //       <Text>{error}</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        value={search}
        onChangeText={setSearch}
      />
      <Text style={styles.recordCount}>
        Cantidad de registros: {filteredProducts.length}
      </Text>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetail", { product: item })
            }
          >
            <ProductItem product={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  recordCount: {
    fontSize: 16,
    marginBottom: 10,
  },
  // container: {
  // 	flex: 1,
  // 	paddingTop: 22,
  //   },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default ProductListScreen;
