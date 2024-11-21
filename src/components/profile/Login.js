import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import stylest from '../../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ email và mật khẩu.');
      return;
    }
    if (trimmedPassword.length < 6) {
      Alert.alert('Lỗi', 'Mật khẩu phải có ít nhất 6 ký tự.');
      return;
    }

    Alert.alert('Thông báo', `Đăng nhập thành công với email: ${trimmedEmail}`);
  };

  const navigateToRegister = () => {
    navigation.navigate('signup');
  };

  return (
    <View style={styles.container}>
      <View style={stylest.headerCard}>
        <View style={stylest.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Cá Nhân')}>
            <Icon name="close" size={24} color="rgba(0,0,0,0.5)" />
          </TouchableOpacity>
          <Text style={stylest.headerTitle}>Đăng nhập</Text>
        </View>
      </View>

      <Text style={styles.title}>Đăng Nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)} 
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}  
        onChangeText={(text) => setPassword(text)} 
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng Nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToRegister}>
        <Text style={styles.registerText}>Chưa có tài khoản? Đăng ký ngay!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#007BFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },

});

export default LoginScreen;
