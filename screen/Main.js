import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon4.png";
import icon4 from "../assets/icon5.png";
import icon5 from "../assets/icon6.png";
import icon6 from "../assets/icon7.png";

const categoriesData = [
  { id: "1", icon: icon1, text: "Bánh su kem" },
  { id: "2", icon: icon2, text: "Bánh socola" },
  { id: "3", icon: icon3, text: "Bánh muffin" },
  { id: "4", icon: icon4, text: "Bánh kẹp" },
  { id: "5", icon: icon5, text: "Bánh cốm" },
  { id: "6", icon: icon6, text: "Bánh tart" },
];

const Main = () => {
  const navigation = useNavigation();
  const [productsData, setProductsData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get("http://192.168.16.108:3000/tb_home")
      .then((response) => {
        setProductsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <Image
        style={{ width: "90%", height: 200, marginHorizontal: 20 }}
        source={require("../assets/banner_cake.jpg")}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Favorite")}
        style={{
          position: "absolute",
          marginLeft: 330,
          marginTop: 650,
          zIndex: 1,
        }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            backgroundColor: "white",
            borderRadius: 100,
          }}
          source={require("../assets/ic5.png")}
        />
      </TouchableOpacity>

      <Text style={styles.explore}>Explore from categories</Text>
      <FlatList
        data={categoriesData}
        keyExtractor={(category) => category.id}
        renderItem={({ item: category }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ChiTietSanPham", { productId: category.id })
            }
          >
            <View style={styles.itemSmall}>
              <Image style={{ width: 80, height: 80 }} source={category.icon} />
              <Text>{category.text}</Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={3}
      />

      <Text style={styles.textList}>New Products</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(product) => product.id}
        renderItem={({ item: product }) => (
          <View style={styles.itemSanPham}>
            <TouchableOpacity>
              <Image
                style={{ width: 130, height: 120 }}
                source={{ uri: product.image }}
              />
            </TouchableOpacity>
            <View style={styles.textSanPham}>
              <Text style={styles.itemName}>{product.name}</Text>
              <Text style={{ fontWeight: "bold" }}>
                Giá: <Text style={styles.itemGia}>{product.price}</Text>
              </Text>
              <Text>{product.description}</Text>
            </View>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },

  input: {
    height: 40,
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: 25,
    paddingLeft: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },

  explore: {
    fontSize: 18,
    color: "#cd5c5c",
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 20,
  },

  itemSmall: {
    width: 100,
    height: 100,
    marginHorizontal: 20,
    textAlign: "center",
    alignItems: "center",
  },

  textList: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#cd5c5c",
    marginHorizontal: 20,
    marginVertical: 20,
  },

  itemSanPham: {
    flexDirection: "row",
    marginLeft: 20,
    marginBottom: 10,
  },

  textSanPham: {
    marginLeft: 30,
    width: 230,
  },

  itemName: {
    fontWeight: "bold",
    fontSize: 18,
  },

  itemGia: {
    color: "red",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
