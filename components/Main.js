import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Anh from '../assets/banner_cake.jpg'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon4.png'
import icon4 from '../assets/icon5.png'
import icon5 from '../assets/icon6.png'
import icon6 from '../assets/icon7.png'


const Main = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Search' style={styles.input} />
      <Image style={{ width: '90%', height: 200, marginHorizontal: 20 }} source={Anh} />

<ScrollView>
        {/* item */}
        <View style={styles.item}>

          <Text style={styles.explore}>Explore from categories</Text>

          {/* khối */}
          <View style={styles.itemBig}>

            {/* k1 */}
            <TouchableOpacity>
              <View style={styles.itemSmall}>
                <Image style={{ width: 80, height: 80, }} source={icon1} />
                <Text>Bánh su kem</Text>
              </View>
            </TouchableOpacity>
            {/* k2 */}
            <TouchableOpacity>
              <View style={styles.itemSmall}>
                <Image style={{ width: 80, height: 80 }} source={icon2} />
                <Text>Bánh socola</Text>
              </View>
            </TouchableOpacity>
            {/* k3 */}
            <TouchableOpacity>
              <View style={styles.itemSmall}>

                <Image style={{ width: 80, height: 80 }} source={icon3} />
                <Text>Bánh muffin</Text>

              </View>
            </TouchableOpacity>

          </View>

          {/* khối 2 */}

          <View style={styles.itemBig}>

            {/* k1 */}
            <TouchableOpacity>
              <View style={styles.itemSmall}>
                <Image style={{ width: 80, height: 80, }} source={icon4} />
                <Text>Bánh kẹp</Text>

              </View>
            </TouchableOpacity>
            {/* k2 */}
            <TouchableOpacity>
              <View style={styles.itemSmall}>

                <Image style={{ width: 80, height: 80 }} source={icon5} />
                <Text>Bánh cốm</Text>

              </View>
            </TouchableOpacity>
            {/* k3 */}
            <TouchableOpacity>
              <View style={styles.itemSmall}>

                <Image style={{ width: 80, height: 80 }} source={icon6} />
                <Text>Bánh tart</Text>

              </View>
            </TouchableOpacity>

          </View>

        </View>


        {/* list */}

        <View style={styles.list}>
          <Text style={styles.textList}>New Products</Text>

            {/* san pham */}
            <View style={styles.itemSanPham}>
              <TouchableOpacity>
                <Image style={{ width: 130, height: 120 }} source={icon2} />
              </TouchableOpacity>
              <View style={styles.textSanPham}>
                <Text style={styles.itemName}>Bánh Socola</Text>
                <Text style={{ fontWeight: 'bold' }}>Giá: <Text style={styles.itemGia}>60.000</Text></Text>
                <Text>Bánh được phủ sốt caramel, chocolate, các loại mứt hoa quả</Text>
              </View>
            </View>

            <View style={styles.itemSanPham}>
              <TouchableOpacity>
                <Image style={{ width: 130, height: 120 }} source={icon1} />
              </TouchableOpacity>
              <View style={styles.textSanPham}>
                <Text style={styles.itemName}>Bánh Su Kem</Text>
                <Text style={{ fontWeight: 'bold' }}>Giá: <Text style={styles.itemGia}>55.000</Text></Text>
                <Text>Bánh gồm có hai phần: vỏ pastry giòn bên ngoài và nhân kem trứng ngọt mát bên trong</Text>
              </View>
            </View>

            <View style={styles.itemSanPham}>
              <TouchableOpacity>
                <Image style={{ width: 130, height: 120 }} source={icon6} />
              </TouchableOpacity>
              <View style={styles.textSanPham}>
                <Text style={styles.itemName}>Bánh Tart</Text>
                <Text style={{ fontWeight: 'bold' }}>Giá: <Text style={styles.itemGia}>70.000</Text></Text>
                <Text>Bánh tart ngọt bao gồm các loại nhân có vị ngọt như: nhân kem, nhân meringue (lòng trắng trứng), mứt hoa quả, trái cây, socola,...</Text>
              </View>
            </View>


        </View>
</ScrollView>

    </View>
  )
}

export default Main

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'pink'
  },

  input: {
    height: 50,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 25,
    paddingLeft: 20,
    marginHorizontal: 20,
    marginVertical: 50,

  },

  explore: {
    fontSize: 18,
    color: 'white',
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
    color: 'white',
    marginHorizontal: 20,
    marginVertical: 20,

  },

  itemSanPham: {
    flexDirection: 'row',
    marginLeft: 20,
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