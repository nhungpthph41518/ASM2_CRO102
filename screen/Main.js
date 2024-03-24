import { StyleSheet, Text, View,FlatList, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Anh from '../assets/banner_cake.jpg'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon4.png'
import icon4 from '../assets/icon5.png'
import icon5 from '../assets/icon6.png'
import icon6 from '../assets/icon7.png'

import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const categoriesData = [
  { id: '1', icon: icon1, text: 'Bánh su kem' },
  { id: '2', icon: icon2, text: 'Bánh socola' },
  { id: '3', icon: icon3, text: 'Bánh muffin' },
  { id: '4', icon: icon4, text: 'Bánh kẹp' },
  { id: '5', icon: icon5, text: 'Bánh cốm' },
  { id: '6', icon: icon6, text: 'Bánh tart' },
];

// const newProductsData = [
//   { id: '1', image: icon2, name: 'Bánh Socola', price: '60.000', description: 'Bánh được phủ sốt caramel, chocolate, các loại mứt hoa quả' },
//   { id: '2', image: icon6, name: 'Bánh Tart', price: '70.000', description: 'Bánh tart ngọt bao gồm các loại nhân có vị ngọt như: nhân kem, nhân meringue (lòng trắng trứng), mứt hoa quả, trái cây, socola,...' },
//   { id: '3', image: icon1, name: 'Bánh Su Kem', price: '55.000', description: 'Bánh gồm có hai phần: vỏ pastry giòn bên ngoài và nhân kem trứng ngọt mát bên trong' },
// ];

// const allData = [
//   { type: 'categories', data: categoriesData },
//   { type: 'products', data: newProductsData },
// ];

const Main = () => {
  const navigation = useNavigation();
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.16.105:3000/tb_home")
      .then((response) => {
        setProductsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput placeholder='Search' style={styles.input} />
      <Image style={{ width: '90%', height: 200, marginHorizontal: 20 }} source={require('../assets/banner_cake.jpg')} />

      {/* image thêm */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Favorite')}
        style={{ position: 'absolute', marginLeft: 330, marginTop: 650, zIndex: 1 }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            backgroundColor: 'white',
            borderRadius: 100,
          }}
          source={require('../assets/ic5.png')}
        />
      </TouchableOpacity>


      <FlatList
        data={[
          { type: 'categories', data: categoriesData },
          { type: 'products', data: productsData },
        ]}
        keyExtractor={(item, index) => `${item.type}-${index}`}
        renderItem={({ item }) => {
          if (item.type === 'categories') {
            return (
              <>
                <Text style={styles.explore}>Explore from categories</Text>
                <FlatList
                  data={item.data}
                  keyExtractor={(category) => category.id}
                  renderItem={({ item: category }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ChiTietSanPham', { productId: category.id })}>
                      <View style={styles.itemSmall}>
                        <Image style={{ width: 80, height: 80 }} source={category.icon} />
                        <Text>{category.text}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  numColumns={3}
                />
              </>
            );
          } else if (item.type === 'products') {
            return (
              <>
                <Text style={styles.textList}>New Products</Text>
                <FlatList
                  data={item.data}
                  keyExtractor={(product) => product.id}
                  renderItem={({ item: product }) => (
                    <View style={styles.itemSanPham}>
                      <TouchableOpacity>
                        <Image style={{ width: 130, height: 120 }} source={{ uri: product.image }} />
                      </TouchableOpacity>
                      <View style={styles.textSanPham}>
                        <Text style={styles.itemName}>{product.name}</Text>
                        <Text style={{ fontWeight: 'bold' }}>Giá: <Text style={styles.itemGia}>{product.price}</Text></Text>
                        <Text>{product.description}</Text>
                      </View>
                    </View>
                  )}
                  numColumns={2}
                />
              </>
            );
          }
        }}
      />
    </View>
  );
};


export default Main

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'pink'
  },

  input: {
    height: 40,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 25,
    paddingLeft: 20,
    marginHorizontal: 20,
    marginVertical: 10,

  },

  explore: {
    fontSize: 18,
    color: '#cd5c5c',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 20
  },

  itemBig: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  itemSmall: {
    width: 100,
    height: 100,
    marginHorizontal: 20,
    // backgroundColor: 'white',
    textAlign: 'center',
    alignItems: 'center'

  },

  textList: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#cd5c5c',
    marginHorizontal: 20,
    marginVertical: 20,

  },

  itemSanPham: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 10
  },

  textSanPham: {
    marginLeft: 30,
    width: 230,

  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18
  },
  itemGia: {
    color: 'red',
    fontWeight: 'bold',
    fontStyle: 'italic'
  }

})