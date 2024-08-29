import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'a@gmail.com' && password === '1') {
      navigation.push('AppDrawer');
    } else {
      Alert.alert('Invalid Credentials', 'Please check your email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
      <TextInput
        style={styles.valueInput}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.valueInput}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
     <View style={{width:"75%", borderRadius: 30, overflow: 'hidden'}}>
      <Button  title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  valueInput: {
    width: '80%',
    fontSize: 15,
    marginBottom: 20,
    padding: 10,
    // borderWidth: 0.2,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
