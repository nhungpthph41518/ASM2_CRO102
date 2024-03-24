import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../screen/Main";
import GioHang from "../screen/GioHang";
import FavoritesList from "../screen/FavoritesList";
import ChiTietSanPham from "../screen/ChiTietSanPham";
import Contact from "../screen/Contact";
import CaiDat from '../screen/CaiDat'


import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 20,
                    right: 20,
                    backgroundColor: '#f08080',
                    borderRadius: 15,
                    height: 90,
                }
            }}

        >
            <Tab.Screen name="Home" component={Main}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/ic1.png')}
                                resizeMode="contain"
                                style={{
                                    width: 50,
                                    height: 40,
                                    tintColor: focused ? '#e32f45' : '#ffc0cb'
                                }}
                            />

                            <Text style={{ color: focused ? '#e32f45' : '#ffc0cb' }}>
                                Home
                            </Text>


                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Giỏ Hàng " component={GioHang}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/ic2.png')}
                                resizeMode="contain"
                                style={{
                                    width: 40,
                                    height: 40,
                                    tintColor: focused ? '#e32f45' : '#ffc0cb'
                                }}
                            />

                            <Text style={{ color: focused ? '#e32f45' : '#ffc0cb' }}>
                                Giỏ Hàng
                            </Text>


                        </View>
                    ),
                }}
            />


            <Tab.Screen name="Yêu Thích" component={FavoritesList}

                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/ic3.png')}
                                resizeMode="contain"
                                style={{
                                    width: 38,
                                    height: 40,
                                    tintColor: focused ? '#e32f45' : '#ffc0cb'
                                }}
                            />

                            <Text style={{ color: focused ? '#e32f45' : '#ffc0cb' }}>
                                Yêu Thích
                            </Text>


                        </View>
                    ),
                }}
            />


            <Tab.Screen name="Chi Tiết Sản Phẩm" component={ChiTietSanPham}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/ic4.png')}
                                resizeMode="contain"
                                style={{
                                    width: 38,
                                    height: 40,
                                    tintColor: focused ? '#e32f45' : '#ffc0cb'
                                }}
                            />

                            <Text style={{ color: focused ? '#e32f45' : '#ffc0cb' }}>
                                Chi Tiết
                            </Text>


                        </View>
                    ),
                }}
            />


            <Tab.Screen name="Cài Đặt" component={CaiDat}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image
                                source={require('../assets/ic5.png')}
                                resizeMode="contain"
                                style={{
                                    width: 90,
                                    height: 40,
                                    tintColor: focused ? '#e32f45' : '#ffc0cb'
                                }}
                            />

                            <Text style={{ color: focused ? '#e32f45' : '#ffc0cb' }}>
                                Cài Đặt
                            </Text>


                        </View>
                    ),
                }}
            />

        </Tab.Navigator>

    );
}


const styles = StyleSheet.create({


}
)


export default Tabs;
