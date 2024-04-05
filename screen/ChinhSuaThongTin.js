import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Modal,
} from "react-native";

const ChinhSuaThongTin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const validateEmail = (email) => {
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Regular expression for validating phone number
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleSave = () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !address.trim() ||
      !phoneNumber.trim()
    ) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    // Validation
    if (!name.trim()) {
      alert("Vui lòng nhập tên khách hàng");
      return;
    }
    if (!validateEmail(email)) {
      alert("Vui lòng nhập email hợp lệ");
      return;
    }
    if (!address.trim()) {
      alert("Vui lòng nhập địa chỉ");
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      alert("Số điện thoại phải có 10 số");
      return;
    }

    // All validations passed, show success modal
    setShowSuccessModal(true);

    // Reset input fields
    setName("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
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
          <TextInput
            placeholder="Tên khách hàng"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Địa chỉ"
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            placeholder="Số điện thoại"
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.buttonAction} onPress={handleSave}>
          <Text style={styles.buttonActionText}>LƯU </Text>
        </TouchableOpacity>

        {/* Success Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showSuccessModal}
          onRequestClose={() => setShowSuccessModal(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Lưu thành công!</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setShowSuccessModal(false)}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChinhSuaThongTin;

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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#f08080",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});
