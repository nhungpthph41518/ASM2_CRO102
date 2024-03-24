import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon6 from '../assets/icon7.png'

const GioHang = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.textSP}>SẢN PHẨM </Text>

            <ScrollView>
                {/* k1 */}
                <View style={styles.content}>
                    <Image style={styles.anh} source={icon1} />
                    <View style={styles.textContent}>
                        <Text style={styles.textName}>Bánh su kem</Text>
                        <Text style={styles.textGia}>60.000 VND</Text>

                        <View style={styles.bottom}>
                            <TouchableOpacity style={styles.buttonAction}>
                                <Text style={styles.buttonActionText}> + </Text>
                            </TouchableOpacity>
                            <Text style={styles.textSo}>1</Text>
                            <TouchableOpacity style={styles.buttonAction}>
                                <Text style={styles.buttonActionText}> - </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                {/* k2 */}
                <View style={styles.content}>
                    <Image style={styles.anh} source={icon2} />
                    <View style={styles.textContent}>
                        <Text style={styles.textName}>Bánh su kem</Text>
                        <Text style={styles.textGia}>60.000 VND</Text>

                        <View style={styles.bottom}>
                            <TouchableOpacity style={styles.buttonAction}>
                                <Text style={styles.buttonActionText}> + </Text>
                            </TouchableOpacity>
                            <Text style={styles.textSo}>1</Text>
                            <TouchableOpacity style={styles.buttonAction}>
                                <Text style={styles.buttonActionText}> - </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                {/* k3 */}
                <View style={styles.content}>
                    <Image style={styles.anh} source={icon6} />
                    <View style={styles.textContent}>
                        <Text style={styles.textName}>Bánh su kem</Text>
                        <Text style={styles.textGia}>60.000 VND</Text>

                        <View style={styles.bottom}>
                            <TouchableOpacity style={styles.buttonAction}>
                                <Text style={styles.buttonActionText}> + </Text>
                            </TouchableOpacity>
                            <Text style={styles.textSo}>1</Text>
                            <TouchableOpacity style={styles.buttonAction}>
                                <Text style={styles.buttonActionText}> - </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>

            {/* TOTAL */}
            <View style={styles.total}>
                <Text style={styles.totalText}>CỘNG GIỎ HÀNG</Text>
                <Text style={styles.totalGia}>Tổng: 60.000 VND</Text>

            </View>

            <TouchableOpacity style={styles.btnThanhToan}>
                <Text style={styles.btnTextTT}> THANH TOÁN</Text>
            </TouchableOpacity>

        </View>
    )
}

export default GioHang

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },

    textSP: {
        marginTop: 60,
        marginHorizontal: 20,
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    },

    content: {
        flexDirection: 'row',
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f08080',
        marginTop: 20

    },

    textContent: {
        marginLeft: 50,
        justifyContent: 'center'

    },
    textName: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold'
    },

    textGia: {
        fontStyle: 'italic'
    },

    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
        padding: 5,
        marginTop: 5

    },
    textSo: {
        width: 30,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#f08080',
        textAlign: 'center'

    },

    buttonAction: {
        backgroundColor: '#cd5c5c',
        width: 30,
        alignItems: 'center'

    },

    buttonActionText: {
        fontSize: 18,
        color: 'white'
    },

    total: {
        marginHorizontal: 20,
    },

    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5

    },
    totalGia: {
        fontSize: 16
    },

    btnThanhToan: {
        marginBottom: 70,
        backgroundColor: '#cd5c5c',
        marginHorizontal: 60,
        height: 50,
        marginTop: 20,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',


    },

    btnTextTT: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    }

})