import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import React from 'react'

const ChinhSuaThongTin = () => {
    const handlePressOutside = () => {
      Keyboard.dismiss();
    };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image source={require("../assets/img.png")} style={styles.avatar} />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>Thông tin sẽ được lưu cho lần mua kế tiếp.</Text>
          <Text>Bấm vào thông tin chi tiết để chỉnh sửa.</Text>
        </View>
        <View>
          <TextInput placeholder="Tên khách hàng" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Địa chỉ" style={styles.input} />
          <TextInput placeholder="Số điện thoại" style={styles.input} />
        </View>

        <TouchableOpacity style={styles.buttonAction}>
          <Text style={styles.buttonActionText}>LƯU </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ChinhSuaThongTin

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffe4e1",
    flex: 1,
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  input: {
    height: 50,
    backgroundColor: "pink",
    margin: 10,
    borderRadius: 20,
    paddingLeft: 10,
  },
  buttonActionText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonAction: {
    backgroundColor: "#f08080",
    marginHorizontal: 60,
    height: 50,
    marginTop: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});