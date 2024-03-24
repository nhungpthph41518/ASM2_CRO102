import { StyleSheet, TouchableWithoutFeedback,ScrollView, TouchableOpacity, Keyboard, Text, View, Image, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import Anh from '../assets/banh.jpg'
import iconHeart from '../assets/iconHeart.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon4.png'
import icon4 from '../assets/icon5.png'
import icon6 from '../assets/icon7.png'

const FavoritesList = () => {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                {/* header */}
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Favorite Foods</Text>
                    <Image style={styles.anh} source={Anh} />
                </View>

                {/* input */}
                <View style={styles.input}>
                    {/* <Image style={styles.icon} source={icon} /> */}
                    <TextInput style={styles.textInput} placeholder='Search' />
                </View>

                <View style={styles.content}>
                    {/* khối */}
                    <View style={styles.itemBig}>

                        {/* k1 */}
                        <TouchableOpacity>
                            <View style={styles.itemSmall}>
                                <Image style={{ width: 60, height: 60, }} source={icon1} />
                                <Text>Bánh su kem</Text>
                            </View>
                        </TouchableOpacity>
                        {/* k2 */}
                        <TouchableOpacity>
                            <View style={styles.itemSmall}>
                                <Image style={{ width: 60, height: 60 }} source={icon2} />
                                <Text>Bánh socola</Text>
                            </View>
                        </TouchableOpacity>
                        {/* k3 */}
                        <TouchableOpacity>
                            <View style={styles.itemSmall}>

                                <Image style={{ width: 60, height: 60 }} source={icon3} />
                                <Text>Bánh muffin</Text>

                            </View>
                        </TouchableOpacity>
                        

                    </View>

                    <Text style={styles.textContent}>Select Your Choices</Text>


                    {/* List */}

                    <View style={styles.list}>

                        <SafeAreaView>
                            <ScrollView horizontal={false}>

                                {/* san pham */}
                                <View style={styles.itemSanPham}>
                                    <TouchableOpacity>
                                        <Image style={{ width: 130, height: 120, marginLeft: 10, }} source={icon2} />
                                    </TouchableOpacity>
                                    <View style={styles.textSanPham}>
                                        <Text style={styles.itemName}>Bánh Socola</Text>
                                        <Text style={{ fontWeight: 'bold' }}>Giá: <Text style={styles.itemGia}>60.000</Text></Text>
                                        {/* image */}
                                        <View style={styles.iconList}>
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                        </View>

                                        <TouchableOpacity style={styles.buttonAction}>
                                            <Text style={styles.buttonActionText}> Add to cart</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>

                                <View style={styles.itemSanPham}>
                                    <TouchableOpacity>
                                        <Image style={{ width: 130, height: 120, marginLeft: 10 }} source={icon1} />
                                    </TouchableOpacity>
                                    <View style={styles.textSanPham}>
                                        <Text style={styles.itemName}>Bánh Su Kem</Text>
                                        <Text style={{ fontWeight: 'bold' }}>Giá: <Text style={styles.itemGia}>55.000</Text></Text>
                                        {/* image */}
                                        <View style={styles.iconList}>
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                        </View>

                                        <TouchableOpacity style={styles.buttonAction}>
                                            <Text style={styles.buttonActionText}> Add to cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.itemSanPham}>
                                    <TouchableOpacity>
                                        <Image style={{ width: 130, height: 120, marginLeft: 10 }} source={icon6} />
                                    </TouchableOpacity>
                                    <View style={styles.textSanPham}>
                                        <Text style={styles.itemName}>Bánh Tart</Text>
                                        <Text style={{ fontWeight: 'bold' }}>Giá: <Text style={styles.itemGia}>70.000</Text></Text>
                                        {/* image */}
                                        <View style={styles.iconList}>
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                        </View>

                                        <TouchableOpacity style={styles.buttonAction}>
                                            <Text style={styles.buttonActionText}> Add to cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.itemSanPham}>
                                    <TouchableOpacity>
                                        <Image style={{ width: 130, height: 120, marginLeft: 10 }} source={icon3} />
                                    </TouchableOpacity>
                                    <View style={styles.textSanPham}>
                                        <Text style={styles.itemName}>Bánh Muffin</Text>
                                        <Text style={{ fontWeight: 'bold' }}>Giá: <Text style={styles.itemGia}>70.000</Text></Text>
                                        {/* image */}
                                        <View style={styles.iconList}>
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                            <Image style={styles.iconHeart} source={iconHeart} />
                                        </View>

                                        <TouchableOpacity style={styles.buttonAction}>
                                            <Text style={styles.buttonActionText}> Add to cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </ScrollView>
                        </SafeAreaView>

                    </View>

                </View>


            </View>

        </TouchableWithoutFeedback>



    )
}

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
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },

    textHeader: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold'
    },

    anh: {
        width: 100,
        height: 100,
    },

    // input: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    // },

    // icon: {
    //     backgroundColor: 'white',
    //     width: 30,
    //     height: 30,
    //     marginTop: 20
    // },

    textInput: {
        height: 40,
        width: 340,
        backgroundColor: 'white',
        marginLeft: 40,
        borderRadius: 10,
        paddingLeft: 10,
        marginTop: 20,
    },

    content: {
        flex: 2,
        backgroundColor: 'white',
        marginTop: 30,
        borderRadius: 30,

    },

    itemBig: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10

    },

    itemSmall: {
        width: 100,
        height: 100,
        marginHorizontal: 20,
        // backgroundColor: 'white',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#fff0f5',

    },

    textContent: {
        fontSize: 17,
        marginLeft: 30,
        marginTop: 20,
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