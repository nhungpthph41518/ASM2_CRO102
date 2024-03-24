import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
// import { AsyncStorage } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const doLogin = () => {
    //kiem tra hop le du lieu
    if (username.length == 0) {
      alert("Chưa nhập Username");
      return;
    }
    if (password.length == 0) {
      alert("Chưa nhập PassWord");
      return; //return để thoát hàm login
    }

    //thực hiện fetch để lấy dữ liệu về
    let url_check_login =
      "http://192.168.16.105:3000/tb_user?username=" + username;

    //  let url_check_login = "http://192.168.16.105:3000/tb_user?username=" + username

    fetch(url_check_login)
      .then((res) => {
        return res.json();
      })
      .then(async (res_login) => {
        if (res_login.length != 1) {
          alert("Sai username hoặc lỗi trùng lặp dữ liệu");
          return;
        } else {
          //số lượng lấy được 1 bản ghi thì thực hiện kiểm tra passwd
          let objU = res_login[0];
          if (objU.password != password) {
            alert("Sai password");
            return;
          } else {
            //đúng pass thì lưu thông tin vào storage
            try {
              await AsyncStorage.setItem("loginInfo", JSON.stringify(objU));
              //chuyển màn hình
              props.navigation.navigate("Tab");
            } catch (e) {
              //saving error
              console.log(e);
            }
          }
        }
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.textWC}>Welcome Back !</Text>
        <Text style={styles.textHello}>Hello again you have been missed!</Text>
        <View style={styles.textWrapper}>
          <Image source={require("../assets/img.png")} style={styles.img} />
        </View>

        {/* input */}
        <View style={styles.form}>
          <Text style={styles.textIP}>Username</Text>
          <TextInput
            placeholder="Enter your username"
            style={styles.input}
            onChangeText={(txt) => {
              setusername(txt);
            }}
          />
          <Text style={styles.textIP}>Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholder="Enter your password"
              style={styles.passwordInput}
              onChangeText={(txt) => {
                setpassword(txt);
              }}
              textContentType="password"
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.passwordIconContainer}
            ></TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonLogin} onPress={doLogin}>
          <Text style={styles.buttonLoginText}> Đăng Nhập</Text>
        </TouchableOpacity>

        <Text style={styles.textOr}>--------Or Login with--------</Text>

        {/* fb, gg */}
        <View style={styles.action}>
          <TouchableOpacity style={styles.buttonAction}>
            <Image source={require("../assets/icfb.png")} style={styles.icon} />
            <Text style={styles.buttonActionText}>Facebook </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonAction}>
            <Image source={require("../assets/icgg.png")} style={styles.icon} />
            <Text style={styles.buttonActionText}> Google </Text>
          </TouchableOpacity>
        </View>

        {/* quên mk, thoát */}
        <View style={styles.formDont}>
          <Text style={styles.btnTextDont}> Don't have an account? </Text>

          <TouchableOpacity style={styles.textDont}>
            <Text style={styles.btnTextReg}> Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "pink",
  },

  textWC: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
  },

  textHello: {
    fontSize: 18,
    marginLeft: 20,
  },

  img: {
    width: 150,
    height: 150,
    marginTop: 20,
    // marginLeft: 100,
  },
  textWrapper: {
    alignItems: "center",
  },

  form: {
    marginTop: 20,
    marginHorizontal: 20,
  },

  textIP: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 10,
  },

  input: {
    backgroundColor: "white",
    height: 50,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },

  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },

  passwordInput: {
    flex: 1,
  },

  passwordIconContainer: {
    marginLeft: 10,
  },

  buttonLogin: {
    backgroundColor: "#f08080",
    height: 50,
    marginTop: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
  },

  buttonLoginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  textOr: {
    textAlign: "center",
    fontSize: 17,
    marginVertical: 20,
  },

  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
  },

  buttonAction: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#dcdcdc",
    paddingLeft: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  buttonActionText: {
    marginLeft: 10,
  },

  formDont: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  btnTextDont: {
    fontSize: 18,
    fontWeight: "500",
  },

  btnTextReg: {
    fontSize: 18,
    fontWeight: "500",
    color: "red",
    fontStyle: "italic",
  },
});
