import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
  Modal,
  Button,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const GioHang = () => {
  const [apiData, setApiData] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("http://192.168.16.108:3000/tb_giohang")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const increaseQuantity = (item) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[item.id] || 0;
      const updatedQuantities = {
        ...prevQuantities,
        [item.id]: currentQuantity + 1,
      };
      return updatedQuantities;
    });
  };

  const decreaseQuantity = (item) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[item.id] || 0;
      if (currentQuantity > 0) {
        const updatedQuantities = {
          ...prevQuantities,
          [item.id]: currentQuantity - 1,
        };
        return updatedQuantities;
      } else {
        return prevQuantities;
      }
    });
  };

  const handleDeleteItem = () => {
    axios
      .delete(`http://192.168.16.108:3000/tb_giohang/${selectedItem.id}`)
      .then((response) => {
        setApiData((prevApiData) =>
          prevApiData.filter((item) => item.id !== selectedItem.id)
        );
        setQuantities((prevQuantities) => {
          const updatedQuantities = { ...prevQuantities };
          delete updatedQuantities[selectedItem.id];
          return updatedQuantities;
        });
        setSelectedItem(null);
        setModalVisible(false);
        Alert.alert("Xóa thành công");
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Xóa thất bại");
      });
  };

  const handleThanhToanPress = () => {
    const selectedItems = apiData.filter(item => quantities[item.id] > 0);
    const totalPrice = selectedItems.reduce((total, item) => {
      return total + (item.price * quantities[item.id]);
    }, 0);
    navigation.navigate("ThanhToan", { selectedItems, totalPrice });
  };

  const renderItem = ({ item }) => {
    const quantity = quantities[item.id] || 0;

    const handleItemPress = () => {
      setSelectedItem(item);
      setModalVisible(true);
    };

    return (
      <View style={styles.content}>
        <Image style={styles.anh} source={{ uri: item.image }} />
        <View style={styles.textContent}>
          <TouchableOpacity onPress={handleItemPress}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textGia}>{item.price}</Text>
          </TouchableOpacity>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.buttonAction}
              onPress={() => increaseQuantity(item)}
            >
              <Text style={styles.buttonActionText}> + </Text>
            </TouchableOpacity>
            <Text style={styles.textSo}>{quantity}</Text>
            <TouchableOpacity
              style={styles.buttonAction}
              onPress={() => decreaseQuantity(item)}
            >
              <Text style={styles.buttonActionText}> - </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textSP}>SẢN PHẨM</Text>
      <FlatList
        data={apiData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleThanhToanPress}
        >
          <Text style={styles.checkoutButtonText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Bạn có muốn xóa mục này không?</Text>
          <View style={styles.modalButtonContainer}>
            <Button title="Xóa" onPress={handleDeleteItem} />
            <Button title="Hủy" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textSP: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  content: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "pink",
    borderRadius: 20,
  },
  anh: {
    width: 80,
    height: 80,
    marginRight: 16,
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 3,
  },
  textContent: {
    flex: 1,
    justifyContent: "center",
  },
  textName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  textGia: {
    fontSize: 16,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  buttonAction: {
    width: 25,
    height: 25,
    borderRadius: 12,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  buttonActionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textSo: {
    fontSize: 16,
  },
  checkoutButton: {
    backgroundColor: "#f08080",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 90,
    marginHorizontal: 40,
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    width: "80%",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default GioHang;
