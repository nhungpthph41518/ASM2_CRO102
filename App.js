import { StyleSheet, Text, View } from "react-native";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Main from "./screen/Main";
import Contact from "./screen/Contact";
import FavoritesList from "./screen/FavoritesList";
import ChiTietSanPham from "./screen/ChiTietSanPham";
import GioHang from "./screen/GioHang";
import Tab from "./navigation/tabs";
import ThanhToan from './screen/ThanhToan'
import CaiDat from './screen/CaiDat'
import ChinhSuaTT from './screen/ChinhSuaThongTin'

import * as React from "react";
import { AppRegistry } from "react-native";
import AppNavigator from "./screen/Main";

import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";

// import {
//   createDrawerNavigator,
//   DrawerItemList,
// } from "@react-navigation/drawer";
// import { SafeAreaView } from 'react-native-safe-area-context';

// const Drawer = createDrawerNavigator();

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Tab"
          component={Tab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Favorite" component={FavoritesList} />
        <Stack.Screen name="GioHang" component={GioHang} />
        <Stack.Screen name="ChiTietSanPham" component={ChiTietSanPham} />
        <Stack.Screen name="ThanhToan" component={ThanhToan} />
        <Stack.Screen name="CaiDat" component={CaiDat} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="ChinhSuaTT" component={ChinhSuaTT} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // return (

  //   <NavigationContainer>
  //     <Tabs />
  //   </NavigationContainer>

  // );
}
