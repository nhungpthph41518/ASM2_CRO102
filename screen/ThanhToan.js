import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import axios from "axios";


const ThanhToan = ({ route }) => {
  const { selectedItems, totalPrice } = route.params;
  const [vanchuyen, setVanchuyen] = useState("");
  const [thanhtoan, setThanhtoan] = useState("");
  const [phiVanChuyen, setphiVanChuyen] = useState(0);
  const [ten, setTen] = useState("");
  const [email, setEmail] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  // Calculate subtotal
  const subtotal = selectedItems.reduce((acc, item) => {
    return acc + (item.price * item.quantity || 0);
  }, 0);

  // Calculate total
  const total = subtotal + phiVanChuyen;

  const handleVanchuyenChange = (value) => {
    setVanchuyen(value);
    if (value === "Giao hàng nhanh - 15.000đ") {
      setphiVanChuyen(15000);
    } else if (value === "Giao hàng COD - 20.000đ") {
      setphiVanChuyen(20000);
    }
  };

  const handleThanhtoanChange = (value) => {
    setThanhtoan(value);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateFields = () => {
    if (ten.trim() === "") {
      return false;
    }
    if (email.trim() === "" || !validateEmail(email)) {
      return false;
    }
    if (diaChi.trim() === "") {
      return false;
    }
    return true;
  };


    const sendDataToAPI = async () => {
      try {
        const response = await axios.post(
          "http://192.168.16.108:3000/tb_thanhtoan",
          {
            ten: ten,
            email: email,
            diaChi: diaChi,
            phuongThucVanChuyen: vanchuyen,
            hinhThucThanhToan: thanhtoan,
            tongCong: total,
          }
        );
        console.log(response.data);
        // Hiển thị thông báo thành công
        Alert.alert("Thông báo", "Thanh toán thành công!");
      } catch (error) {
        console.error(error);
        // Hiển thị thông báo lỗi
        Alert.alert("Lỗi", "Có lỗi xảy ra. Vui lòng thử lại sau!");
      }
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
            <TextInput
              placeholder="Tên khách hàng"
              style={styles.input}
              value={ten}
              onChangeText={setTen}
            />
            <TextInput
              placeholder="Email"
              style={[styles.input, !isValidEmail && { borderColor: "red" }]}
              value={email}
              onChangeText={(value) => {
                setEmail(value);
                setIsValidEmail(validateEmail(value));
              }}
            />
            {!isValidEmail && (
              <Text style={{ color: "red" }}>Email không hợp lệ</Text>
            )}
            <TextInput
              placeholder="Địa chỉ"
              style={styles.input}
              value={diaChi}
              onChangeText={setDiaChi}
            />
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
            {selectedItems.map((item) => (
              <Text key={item.id}>
                {item.name}: {item.quantity} x {item.price}đ
              </Text>
            ))}
            <Text style={{ fontSize: 20 }}>
              Phí vận chuyển: {phiVanChuyen} VND
            </Text>
            <Text style={{ fontSize: 20 }}>Tổng cộng: {total} VND</Text>
          </View>

          <TouchableOpacity
            style={styles.buttonAction}
            onPress={() => {
              if (validateFields()) {
                sendDataToAPI(); // Gửi dữ liệu lên API nếu tất cả các trường hợp hợp lệ
              } else {
                // Nếu có trường không hợp lệ, hiển thị thông báo lỗi hoặc xử lý khác tùy ý
                alert("Vui lòng điền đầy đủ thông tin và đúng định dạng.");
              }
            }}
          >
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
    backgroundColor: "pink",
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
    height: 30,
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
