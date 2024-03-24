import { StyleSheet, KeyboardAvoidingView, FlatList, ScrollView, TouchableOpacity, Keyboard, Text, View, Image, TextInput, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Anh from '../assets/banh.jpg'
import iconHeart from '../assets/iconHeart.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon4.png'
import icon4 from '../assets/icon5.png'
import icon6 from '../assets/icon7.png'

const FavoritesList = (props) => {
  const smallIconData = [
    { id: '1', image: icon1, name: 'Bánh su kem' },
    { id: '2', image: icon2, name: 'Bánh socola' },
    { id: '3', image: icon3, name: 'Bánh muffin' },
  ];

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON server
    fetch("http://192.168.16.105:3000/tb_products")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);


  const themGioHang = (item) => {
    // Gửi dữ liệu lên API
    const data = {
      image: item.image,
      name: item.name,
      price: item.price
    };

    console.log(data);

    axios
      .post("http://192.168.16.105:3000/tb_giohang", data)
      .then((response) => {
        // Xử lý phản hồi từ API nếu cần
        Alert.alert("Success", "Thêm vào giỏ hàng thành công");
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        Alert.alert("Error", "Thêm vào giỏ hàng thất bại");
        console.error(error);
      });
  };


  const renderSmallIconItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.itemSmall}>
        <Image style={{ width: 60, height: 60 }} source={item.image} />
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderProductItem = ({ item }) => (
    <View style={styles.itemSanPham}>
      <TouchableOpacity>
        <Image style={{ width: 130, height: 120, marginLeft: 10 }} source={{ uri: item.image }} />
      </TouchableOpacity>
      <View style={styles.textSanPham}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={{ fontWeight: 'bold' }}>
          Giá: <Text style={styles.itemGia}>{item.price}</Text>
        </Text>
        <View style={styles.iconList}>
          {[...Array(4)].map((_, index) => (
            <Image key={index} style={styles.iconHeart} source={iconHeart} />
          ))}
        </View>
        <TouchableOpacity style={styles.buttonAction} onPress={() => themGioHang(item)}>
          <Text style={styles.buttonActionText}> Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.textHeader}>Favorite Foods</Text>
          <Image style={styles.anh} source={Anh} />
        </View>

        {/* input */}
        <View style={styles.input}>
          <TextInput style={styles.textInput} placeholder="Search" />
        </View>

        <View style={styles.content}>
          {/* khối */}
          <FlatList
            data={smallIconData}
            renderItem={renderSmallIconItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            style={styles.itemBig}
          />

          <Text style={styles.textContent}>Select Your Choices</Text>

          {/* List */}
          <FlatList
            data={productData}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id}
          />
        </View>

      </View>
    </KeyboardAvoidingView>
  );
};

export default FavoritesList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    },

    header: {
        width: 350,
        height: 100,
        marginHorizontal: 30,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },

    textHeader: {
        color: '#cd5c5c',
        fontSize: 23,
        fontWeight: 'bold'
    },

    anh: {
        width: 100,
        height: 100,
    },

    textInput: {
        height: 40,
        width: 340,
        backgroundColor: 'white',
        marginLeft: 40,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 10,
    },

    content: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 30,

    },

    // itemBig: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginTop: 10
    // },

    itemSmall: {
        width: 100,
        height: 100,
        marginHorizontal: 20,
        // backgroundColor: 'white',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#fff0f5',
        marginTop: 10,
    },

    textContent: {
        fontSize: 20,
        marginLeft: 30,
        fontWeight: '600'
        
    },

    itemSanPham: {
        flexDirection: 'row',
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff0f5',
    },

    textSanPham: {
        marginLeft: 40,
        width: 230,
        marginTop: 10

    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    itemGia: {
        color: 'red',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },


    iconList: {
        flexDirection: 'row',
        marginTop: 10
    },

    iconHeart: {
        width: 20,
        height: 20,
    },

    buttonAction: {
        backgroundColor: '#ffb6c1',
        width: 100,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        borderRadius: 6

    },

    buttonActionText: {
        fontWeight: '500'
    }

})