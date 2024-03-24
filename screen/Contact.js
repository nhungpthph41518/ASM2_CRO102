import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const [summary, setSummary] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!feedback || !summary || !email) {
      Alert.alert("Error", "Vui lòng không bỏ trống");
    } else if (!validateEmail(email)) {
      Alert.alert("Error", "Email không đúng định dạng");
    } else {
      // Gửi dữ liệu lên API
      const data = {
        feedback: feedback,
        summary: summary,
        email: email,
      };

      axios
        .post("http://192.168.16.105:3000/tb_feedback", data)
        .then((response) => {
          // Xử lý phản hồi từ API nếu cần
          Alert.alert("Success", "Gửi Feedback thành công");
          setFeedback("");
          setSummary("");
          setEmail("");
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          Alert.alert("Error", "Gửi Feedback thất bại");
          console.error(error);
        });
    }
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textFeedBack}>Feedback</Text>
          <Text style={styles.textPls}>
            Please tell what do you think, any kinds of feedback is highly
            appreciated. And, don't forget to check out Usernoise Pro.
          </Text>

          <View style={styles.item}>
            <Text style={styles.itemSmall}>Idea</Text>
            <Text style={styles.itemSmall}>Problem</Text>
            <Text style={styles.itemSmall}>Question</Text>
          </View>

          <View>
            <TextInput
              placeholder="Your feedback"
              value={feedback}
              onChangeText={(text) => setFeedback(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Short summary"
              value={summary}
              onChangeText={(text) => setSummary(text)}
              style={styles.inputSmall}
            />
            <TextInput
              placeholder="Your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.inputSmall}
            />
          </View>

          <TouchableOpacity style={styles.buttonAction} onPress={handleSubmit}>
            <Text style={styles.buttonActionText}>Submit feedback</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },

  textFeedBack: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff6347",
    marginHorizontal: 40,
    marginTop: 20,
    marginBottom: 20,
  },

  textPls: {
    marginHorizontal: 20,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },

  itemSmall: {
    fontWeight: "bold",
    marginTop: 20,
  },

  input: {
    height: 150,
    width: 360,
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 25,
    borderRadius: 10,
    paddingLeft: 10,
  },

  inputSmall: {
    height: 50,
    width: 360,
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 25,
    borderRadius: 10,
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
    marginTop: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
