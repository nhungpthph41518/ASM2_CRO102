import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useState} from 'react'


import Anh from '../assets/banh.jpg'

const Signup = () => {

    return (
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>

                <View style={styles.content}>
                    <View style={styles.textWrapper}>
                        <Image style={styles.Image} source={Anh} />
                        <Text style={styles.hiText}>WELCOME</Text>
                    </View>
                </View>

                {/* form */}
                <View style={styles.form}>

                    <TextInput placeholder='Tên đăng nhập' style={styles.input} />
                    <TextInput placeholder='Mật khẩu' style={styles.input} />
                    <TextInput placeholder='Nhập lại mật khẩu' style={styles.input} />

                    <TouchableOpacity style={styles.buttonLogin}>
                        <Text style={styles.buttonLoginText}> Đăng Ký</Text>
                    </TouchableOpacity>
                    


                </View>

                {/* quên mk, thoát */}
                <View style={styles.action}>

                    <Text style={styles.actionText}> You have an account? Click</Text>

                    <TouchableOpacity style={styles.buttonAction}>
                        <Text style={styles.buttonActionText}> Sign in</Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default Signup

const styles = StyleSheet.create({

    Image: {
        width: 100,
        height: 100,
    },

    container: {
        flex: 1,
        backgroundColor: 'pink',
        paddingTop: 100,
    },

    content: {
        alignItems: 'center',
        marginVertical: 30,

    },

    textWrapper: {
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center'

    },

    hiText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        lineHeight: 50,

    },

    // form

    form: {
        marginHorizontal: 10
    },

    input: {
        height: 50,
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 25,
        paddingLeft: 20

    },

    buttonLogin: {
        backgroundColor: '#f08080',
        height: 50,
        marginTop: 20,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',



    },

    buttonLoginText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },

    action: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30,

    },
    
    actionText:{
        color: 'white',
        fontSize: 16,
    },

    buttonActionText: {
        color: '#f08080',
        fontSize: 16,
    }




})