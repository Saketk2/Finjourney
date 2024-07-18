import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const IntroScreenTwo = () => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Image
        source={require('../images/IntroHikingMan.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Create</Text>
      <Text style={styles.finjourney}>An Adventure</Text>
      <Text style={styles.description}>We have the trail towards financial independence, whatever that means for you!</Text>
    </View>
    </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#654321',
    padding: 16,
  },
  content: {
    alignItems: 'center',  // Center the text elements horizontally
  },
  title: {
    fontSize: 30,  // Title font size
    fontWeight: 'bold',
    color: '#fff',  // White color for better contrast
    bottom: 280,  // Space between title and subtitle
    textShadowColor: '#000',  // Black shadow color
    textShadowOffset: { width: 2, height: 2 },  // Shadow offset
    textShadowRadius: 4,  // Shadow blur radius
  },
  image: {
    width: 240,  // Adjust the width of the image
    height: 200,
    top: 50
  },
  finjourney: {
    fontSize: 50,  // Subtitle font size
    fontWeight: 'bold',
    color: '#fff',  // White color for better contrast
    bottom: 270,
    textShadowColor: '#000',  // Black shadow color
    textShadowOffset: { width: 2, height: 2 },  // Shadow offset
    textShadowRadius: 4,  // Shadow blur radius
  },
  description: {
    fontSize: 20,  // Subtitle font size
    fontWeight: 'bold',
    color: '#fff',  // White color for better contrast
    bottom: 10,
    textShadowColor: '#000',  // Black shadow color
    textShadowOffset: { width: 2, height: 2 },  // Shadow offset
    textShadowRadius: 4,  // Shadow blur radius
    textAlign: 'center',
  },
});

export default IntroScreenTwo;
