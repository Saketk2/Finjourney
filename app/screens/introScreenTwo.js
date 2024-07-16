import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const IntroScreenTwo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.description}>This is another introductory screen.</Text>
      <Button 
        title="Get Started"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default IntroScreenTwo;
