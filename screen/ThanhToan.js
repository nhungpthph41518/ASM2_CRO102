import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const ThanhToan = () => {
  const [vanchuyen, setVanchuyen] = useState("");
  const [thanhtoan, setThanhtoan] = useState("");

  const handleVanchuyenChange = (value) => {
    setVanchuyen(value);
  };

  const handleThanhtoanChange = (value) => {
    setThanhtoan(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <View
          style={{
            width: 400,
            marginBottom: 50,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 25 }}>Thông tin khách hàng</Text>

          <View>
            <TextInput placeholder="Tên khách hàng" style={styles.input} />
            <TextInput placeholder="Email" style={styles.input} />
            <TextInput placeholder="Địa chỉ" style={styles.input} />
          </View>

          <Text style={{ fontSize: 25 }}>Phương thức vận chuyển</Text>

          <View>
            <TouchableOpacity
              style={[
                styles.radioButton,
                vanchuyen === "Giao hàng nhanh - 15.000đ" &&
                  styles.radioButtonSelected,
              ]}
              onPress={() => handleVanchuyenChange("Giao hàng nhanh - 15.000đ")}
            >
              <Text>Giao hàng nhanh - 15.000đ</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.radioButton,
                vanchuyen === "Giao hàng COD - 20.000đ" &&
                  styles.radioButtonSelected,
              ]}
              onPress={() => handleVanchuyenChange("Giao hàng COD - 20.000đ")}
            >
              <Text>Giao hàng COD - 20.000đ</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 25 }}>Hình thức thanh toán</Text>

          <View>
            <TouchableOpacity
              style={[
                styles.radioButton,
                thanhtoan === "Thẻ VISA/MASTERCARD" &&
                  styles.radioButtonSelected,
              ]}
              onPress={() => handleThanhtoanChange("Thẻ VISA/MASTERCARD")}
            >
              <Text>Thẻ VISA/MASTERCARD</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.radioButton,
                thanhtoan === "Thẻ ATM" && styles.radioButtonSelected,
              ]}
              onPress={() => handleThanhtoanChange("Thẻ ATM")}
            >
              <Text>Thẻ ATM</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={{ fontSize: 20 }}>Tạm Tính</Text>
            <Text style={{ fontSize: 20 }}>Phí vận chuyển</Text>
            <Text style={{ fontSize: 20 }}>Tổng cộng</Text>
          </View>

          <TouchableOpacity style={styles.buttonAction}>
            <Text style={styles.buttonActionText}>THANH TOÁN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ThanhToan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    backgroundColor: 'pink',
    margin: 10,
    borderRadius: 20,
    paddingLeft: 10,
    
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radioButtonSelected: {
    backgroundColor: "#f08080",
    height: 30
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
    marginTop: 120,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
