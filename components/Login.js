import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import Checkbox from '@react-native-community/checkbox'


const Login = () => {
  // const [isCheck, setIsCheck] = useState(false);
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>

        <View style={styles.content}>
          <View style={styles.textWrapper}>
            <Text style={styles.hiText}>Xin chào!</Text>
            <Text style={styles.userText}>Phạm Thị Hồng Nhung</Text>
          </View>
        </View>

        {/* form */}
        <View style={styles.form}>

          <TextInput placeholder='Tên đăng nhập' style={styles.input} />
          <TextInput placeholder='Mật khẩu' style={styles.input} />

          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}> Đăng nhập</Text>
          </TouchableOpacity>

          {/* checkbox */}

          {/* <Checkbox
            disable={false}
            value={isCheck}
            onValueChange={() => setIsCheck(!isCheck)}

          /> */}

        </View>

        {/* quên mk, thoát */}
        <View style={styles.action}>

          <TouchableOpacity style={styles.buttonAction}>
            <Text style={styles.buttonActionText}> Quên mật khẩu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonAction}>
            <Text style={styles.buttonActionText}> Thoát</Text>
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    </TouchableWithoutFeedback>

  )
}

export default Login

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: 100,
  },

  content: {
    alignItems: 'center',
    marginVertical: 50,

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

  userText: {
    color: 'white',
    fontSize: 20,
    lineHeight: 30

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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,

  },

  buttonActionText: {
    color: 'white',
    fontSize: 16,

  }






})