import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordDupe, setPasswordDupe] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = () => {
    if (!email || !password || !passwordDupe || !username) {
      Alert.alert('All fields are required.');
      return;
    }

    if (password !== passwordDupe) {
      Alert.alert('Passwords do not match.');
      return;
    }
    const signupSuccess = true; 

    if (signupSuccess) {
      Alert.alert('Account created successfully.');
    } else {
      Alert.alert('Failed to create account.');
    }
  };

  return (
    <LinearGradient
      colors={['#7BE9F1', '#FFFFFF']} 
      start={{ x: 0, y: 0 }}  
      end={{ x: 1, y: 1 }}  
      style={styles.container}
    >
    <View style={styles.container}>
      <Image
        source={require('../images/FinjourneyLogo.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Sign up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={passwordDupe}
        onChangeText={setPasswordDupe}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Let's Go!</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#OOO',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: 250,
  },
  button: {
    backgroundColor: '#10C1F1',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 250,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    bottom: 60
  },
});

export default SignupScreen;
