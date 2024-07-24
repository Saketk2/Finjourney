import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const IntroScreenThree = ({ handleGoalInput }) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Image
        source={require('../images/Astronaut.png')}
        style={styles.image}
      />
      <Text style={styles.title}>On Your</Text>
      <Text style={styles.finjourney}>Terms</Text>
      <Text style={styles.description}>Trek with friends on your schedule and your preferences!</Text>
      <TouchableOpacity style={styles.button} onPress={handleGoalInput}>
        <Text style={styles.buttonText}>Go to Goal Input</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3D40D',
    padding: 16,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    bottom: 280,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  image: {
    width: 240,
    height: 200,
    top: 50,
  },
  finjourney: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    bottom: 270,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    bottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#10C1F1', // Background color
    borderRadius: 20, // Border radius
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    alignItems: 'center', // Center text horizontally
    marginTop: 20, // Space above the button
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 16, // Font size
    fontWeight: 'bold', // Font weight
  },
});

export default IntroScreenThree;
