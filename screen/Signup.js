import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Anh from '../assets/banh.jpg';
import eyeIcon from '../assets/icEye.png';
import eyeOffIcon from '../assets/icEyeOpen.png';
import axios from 'axios';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const navigation = useNavigation();
	const formdata = { username: username, password: password, confirmPassword: confirmPassword };
	const handleSignup = () => {
		// Thực hiện kiểm tra thông tin đăng ký ở đây nếu cần
		if (!username || !password || !confirmPassword) {
			Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin.');
			return;
		}

		if (password !== confirmPassword) {
			Alert.alert('Thông báo', 'Mật khẩu và Nhập lại mật khẩu không khớp.');
			return;
		}
		let urlapi = 'http://192.168.16.105:3000/tb_user?username=' + username;
		fetch(urlapi)
			.then((res) => {
				return res.json();
			})
			.then((reslogin) => {
				if (reslogin && reslogin.length > 0) {
					let objuu = reslogin[0];
					if (objuu.username == username) {
						alert('Username đã tồn tại');
						return;
					}
				} else {
					axios
						.post('http://192.168.16.105:3000/tb_user', formdata)
						.then((res) => {
							if (res.data.length !== 1) {
								navigation.navigate('Login');
							}
						})
						.catch((error) => {
							console.error('Error:', error);
							Alert.alert('Lỗi', 'Đã xảy ra lỗi khi đăng ký.');
						});
				}
			});
		// Nếu thông tin hợp lệ, thực hiện gọi API đăng ký
		// fetch('http://10.24.33.131:3001/tb_user', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		username: username,
		// 		password: password,
		// 		confirmPassword: confirmPassword,
		// 	}),
		// })
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		// Kiểm tra kết quả từ API
		// 		// if (data.success) {
		// 		//     // Đăng ký thành công, chuyển hướng đến màn hình đăng nhập
		// 		//     navigation.navigate('Login');
		// 		// } else {
		// 		//     // Xử lý lỗi từ API (nếu có)
		// 		//     Alert.alert('Thông báo', data.message || 'Đăng ký không thành công.');
		// 		// }
		// 	})
		// 	.catch((error) => {
		// 		console.error('Error:', error);
		// 		Alert.alert('Lỗi', 'Đã xảy ra lỗi khi đăng ký.');
		// 	});
	};

	return (
		<TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
			<SafeAreaView style={styles.container}>
				<View style={styles.content}>
					<View style={styles.textWrapper}>
						<Image style={styles.Image} source={Anh} />
						<Text style={styles.hiText}>WELCOME</Text>
					</View>
				</View>

				{/* form */}
				<View style={styles.form}>
					<TextInput
						placeholder="Tên đăng nhập"
						style={styles.input}
						value={username}
						onChangeText={(text) => setUsername(text)}
					/>
					<View style={styles.passwordInputWrapper}>
						<TextInput
							placeholder="Mật khẩu"
							style={styles.passwordInput}
							secureTextEntry={true}
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
					</View>
					<View style={styles.passwordInputWrapper}>
						<TextInput
							placeholder="Nhập lại mật khẩu"
							style={styles.passwordInput}
							secureTextEntry={true}
							value={confirmPassword}
							onChangeText={(text) => setConfirmPassword(text)}
						/>
					</View>

					<TouchableOpacity style={styles.buttonLogin} onPress={handleSignup}>
						<Text style={styles.buttonLoginText}> Đăng Ký</Text>
					</TouchableOpacity>
				</View>

				{/* quên mk, thoát */}
				<View style={styles.action}>
					<Text style={styles.actionText}> You have an account? Click</Text>
					<TouchableOpacity style={styles.buttonAction} onPress={() => navigation.navigate('Login')}>
						<Text style={styles.buttonActionText}> Sign in</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
};

export default Signup;

const styles = StyleSheet.create({
	errorText: {
		color: 'red',
		marginBottom: 10,
	},

	Image: {
		width: 100,
		height: 100,
	},
	container: {
		flex: 1,
		backgroundColor: 'pink',
		paddingTop: 100,
	},
	content: {
		alignItems: 'center',
	},
	textWrapper: {
		fontSize: 20,
		textAlign: 'center',
		alignItems: 'center',
	},
	hiText: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold',
		lineHeight: 50,
	},
	// form
	form: {
		marginHorizontal: 10,
	},
	input: {
		height: 50,
		backgroundColor: 'white',
		marginBottom: 20,
		borderRadius: 25,
		paddingLeft: 20,
	},
	passwordInputWrapper: {
		position: 'relative',
	},
	passwordInput: {
		height: 50,
		backgroundColor: 'white',
		marginBottom: 20,
		borderRadius: 25,
		paddingLeft: 20,
		paddingRight: 50, // Thêm khoảng trống bên phải để không bị che mất biểu tượng con mắt
	},
	buttonLogin: {
		backgroundColor: '#f08080',
		height: 50,
		marginTop: 20,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonLoginText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
	},
	action: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	actionText: {
		color: 'white',
		fontSize: 16,
	},
	buttonActionText: {
		color: '#f08080',
		fontSize: 16,
	},
	eyeIcon: {
		position: 'absolute',
		right: 30,
		top: 20,
	},
	eyeIconImage: {
		width: 20,
		height: 20,
	},
});
