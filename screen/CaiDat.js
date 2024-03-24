import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CaiDat = () => {
  const [currentScreen, setCurrentScreen] = useState("CaiDat");
  const navigation = useNavigation();

  const handleFeedbackPress = () => {
    setCurrentScreen("Contact");
    navigation.navigate("Contact"); 
  };

  const handleLogoutPress = () => {
    setCurrentScreen("Login");
    navigation.navigate("Login"); 
  };

  const handleEditInfoPress = () => {
    setCurrentScreen("ChinhSuaTT");
    navigation.navigate("ChinhSuaTT"); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require("../assets/img.png")} style={styles.avatar} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Phạm Thị Hồng Nhung</Text>
          <Text style={styles.profileEmail}>nhungpthph41518@fpt.edu.vn</Text>
        </View>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Chung</Text>
        <View style={styles.separator} />
        <TouchableOpacity onPress={handleEditInfoPress}>
          <Text>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFeedbackPress}>
          <Text>Feedback</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Bảo mật và Điều khoản</Text>
        <View style={styles.separator} />
        <Text>Điều khoản và điều kiện</Text>
        <Text>Chính sách và quyền riêng tư</Text>
        <TouchableOpacity onPress={handleLogoutPress}>
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CaiDat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffe4e1",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
    color: "gray",
  },
  menuSection: {
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 23,
  },
  separator: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 10,
  },
  logoutText: {
    color: "red",
    fontWeight: "bold",
  },
});
