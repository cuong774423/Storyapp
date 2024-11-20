import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import stylest from '../styles/globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (text) => {
    const trimmedEmail = text.trim();
    setEmail(trimmedEmail);

    if (!trimmedEmail.endsWith('@gmail.com')) {
      setEmailError('Email phải có đuôi @gmail.com');
    } else {
      setEmailError('');
    }
  };

  const handleSignup = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    if (!trimmedName || !trimmedEmail || !trimmedPassword || !trimmedConfirmPassword) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
      return;
    }

    if (emailError) {
      Alert.alert('Lỗi', emailError);
      return;
    }
    if (trimmedPassword.length < 6) {
      Alert.alert('Lỗi', 'Mật khẩu phải có ít nhất 6 ký tự.');
      return;
    }
    if (trimmedPassword !== trimmedConfirmPassword) {
      Alert.alert('Lỗi', 'Mật khẩu không khớp.');
      return;
    }

    Alert.alert('Thành công', 'Đăng ký tài khoản thành công!');
  };

  const navigateToLogin = () => {
    navigation.navigate('login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={stylest.headerCard}>
        <View style={stylest.item}>
          <TouchableOpacity onPress={() => navigation.navigate('Cá Nhân')}>
            <Icon name="close" size={24} color="rgba(0,0,0,0.5)" />
          </TouchableOpacity>
          <Text style={stylest.headerTitle}>Đăng ký</Text>
        </View>
      </View>
      <Text style={styles.title}>Đăng ký tài khoản</Text>

      <TextInput
        style={styles.input}
        placeholder="Tên tài khoản"
        value={name}
        onChangeText={(text) => setName(text.trim())} 
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={handleEmailChange}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text.trim())} 
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text.trim())}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.link}>Đã có tài khoản? Đăng nhập</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default SignupScreen;
