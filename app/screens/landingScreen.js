import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation();

  const logIn = () => {
    navigation.navigate('Login');
  };

  const signUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <LinearGradient
      colors={['#10F14D', '#10C1F1']} 
      start={{ x: 0, y: 0 }}  
      end={{ x: 1, y: 1 }}  
      style={styles.container}
    >
      <View style={styles.content}>
        <TouchableOpacity onPress={signUp} style={styles.button}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logIn} style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <Image
          source={require('../images/FinjourneyLogo.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Sign up or Log in</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200, // Adjust width as needed
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#10C1F1', // Customize background color
    justifyContent: 'center',
    alignItems: 'center',
    top: 100,
    borderRadius: 10, // Border radius for rounded corners
    borderColor: '#000', // Black border color
    borderWidth: 0.5, // Border width for outline
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 130,
    height: 100,
    bottom: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    bottom: 300,
  },
});

export default LandingScreen;
