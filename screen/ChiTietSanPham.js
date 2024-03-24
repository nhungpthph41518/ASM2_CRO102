import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import { useNavigation } from '@react-navigation/native';

const ChiTietSanPham = () => {
    const navigation = useNavigation();
    const data = [
        {
            id: '1',
            name: 'Bánh Su Kem',
            price: '60.000 VND',
            description: [
                'Thơm ngon, béo ngậy',
                'Nhiều dưỡng chất quý giá tốt cho sức khỏe',
                'Món ăn bổ dưỡng cho cả người lớn và trẻ em',
                'Sản xuất theo công nghệ Nhật Bản',
            ],
            promotion: 'Miễn phí giao hàng nội thành Hà Nộ với đơn hàng trị giá hơn 200.000đ',
        },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.content}>
            <View style={{ alignItems: 'center' }}>
                <Image style={styles.anh} source={icon1} />
            </View>

            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textGia}>{item.price}</Text>

            {item.description.map((desc, index) => (
                <Text key={index} style={styles.textContent}>
                    {desc}
                </Text>
            ))}

            <View style={styles.contentBox}>
                <Text style={styles.textKM}>Khuyến mại</Text>
                <Text style={styles.textContent}>{item.promotion}</Text>
            </View>

            <TouchableOpacity
                style={styles.buttonAction}
                onPress={() => navigation.navigate('GioHang')}
            >
                <Text style={styles.buttonActionText}> Mua hàng</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ flexGrow: 1 }}
            />
        </View>
    );
};

export default ChiTietSanPham

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'pink'
    },

    anh: {
        width: 200,
        height: 200,
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