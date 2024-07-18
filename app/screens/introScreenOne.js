import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const IntroScreenOne = () => (
  <LinearGradient
    colors={['#10F14D', '#10C1F1']} 
    start={{ x: 0, y: 0 }}  
    end={{ x: 1, y: 1 }}  
    style={styles.container}
  >
    <View style={styles.content}>
      <Image
        source={require('../images/FinjourneyLogo.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.finjourney}>Finjourney</Text>
      <Text style={styles.description}>We make your financial dreams materialize - and the rest, exciting.</Text>
    </View>
  </LinearGradient>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default IntroScreenOne;


//For all screens: 
//Change font color and type
//Import clear and accurate images
//Fix scroll wheel functionality
//Change UI for the buttons
//Maybe rephrase some of the sentences?