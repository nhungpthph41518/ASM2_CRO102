import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CaiDat = () => {
  const [currentScreen, setCurrentScreen] = useState("CaiDat");
  const [showTerms, setShowTerms] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
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

  const toggleTerms = () => {
    setShowTerms(!showTerms);
    if (!showTerms) setShowPolicy(false);
  };

  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
    if (!showPolicy) setShowTerms(false);
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
          <Text style={{ fontSize: 16 }}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFeedbackPress}>
          <Text style={{ fontSize: 16 }}>Feedback</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.sectionTitle}>Bảo mật và Điều khoản</Text>
        <View style={styles.separator} />
        <TouchableOpacity onPress={toggleTerms}>
          <Text style={{ fontSize: 16 }}>Điều khoản và điều kiện</Text>
        </TouchableOpacity>
        {showTerms && (
          <View>
            <Text style={styles.termsText}>
              Khi sử dụng Website htbakery.vn, Quý khách đã mặc nhiên chấp thuận
              các Điều khoản và Điều kiện được quy định dưới đây. Để biết được
              các sửa đổi mới nhất, Quý khách nên thường xuyên kiểm tra lại
              “Điều khoản và Điều kiện”.
            </Text>
          </View>
        )}
        <TouchableOpacity onPress={togglePolicy}>
          <Text style={{ fontSize: 16 }}>Chính sách và bảo mật</Text>
        </TouchableOpacity>
        {showPolicy && (
          <View>
            <Text style={styles.policyText}>
              Website htbakery.vn không cho phép bất kỳ nhà cung cấp dịch vụ
              internet nào được phép “đặt toàn bộ” hay “nhúng” bất kỳ thành tố
              nào của Website này sang một trang khác hoặc sử dụng các kỹ thuật
              làm thay đổi giao diện / hiển thị mặc định của Website mà chưa có
              sự đồng ý của HT’Bakery.
            </Text>
          </View>
        )}
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
    fontWeight: "500",
  },
  separator: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 10,
  },
  logoutText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
  termsText: {
    marginTop: 10,
    marginBottom: 10,
    fontStyle: "italic",
    color: "gray",
  },
  policyText: {
    marginTop: 10,
    marginBottom: 10,
    fontStyle: "italic",
    color: "gray",
  },
});
