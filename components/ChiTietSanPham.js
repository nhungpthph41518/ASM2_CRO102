import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'

const ChiTietSanPham = () => {
    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center' }}>
                <Image style={styles.anh} source={icon1} />
            </View>

            <View style={styles.content}>
                <Text style={styles.textName}>Bánh Su Kem</Text>
                <Text style={styles.textGia}>60.000 VND</Text>
                <Text style={styles.textContent}>Thơm ngon, béo ngậy</Text>
                <Text style={styles.textContent}>Nhiều dưỡng chất quý giá tốt cho sức khỏe</Text>
                <Text style={styles.textContent}>Món ăn bổ dưỡng cho cả người lớn và trẻ em</Text>
                <Text style={styles.textContent}>Sản xuất theo công nghệ Nhật Bản</Text>

                <View style={styles.contentBox}>
                    <Text style={styles.textKM}>Khuyến mại</Text>
                    <Text style={styles.textContent}>- Miễn phí giao hàng nội thành Hà Nộ với đơn hàng trị giá hơn 200.000đ</Text>

                </View>

                <TouchableOpacity style={styles.buttonAction}>
                    <Text style={styles.buttonActionText}> Mua hàng</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ChiTietSanPham

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'pink'
    },

    anh: {
        width: 200,
        height: 200,
        marginTop: 30
    },

    content: {
        // backgroundColor: 'white',
        height: 400,
        margin: 20,
    },

    textName: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10,
    },

    textGia: {
        color: 'red',
        fontWeight: '700',
        fontSize: 20,
        paddingBottom: 10,
    },

    textContent: {
        fontSize: 16,
        paddingBottom: 10,

    },

    contentBox: {
        width: 380,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1.5,
        padding: 5

    },

    textKM: {
        fontSize: 16,
        paddingBottom: 10,
        color: 'red',
        fontWeight: 'bold',
        fontStyle: 'italic'

    },

    buttonActionText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'

    },

    buttonAction: {
        backgroundColor: '#f08080',
        marginHorizontal: 60,
        height: 50,
        marginTop: 20,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',

    }



})