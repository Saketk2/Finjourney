import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ModeSelector = () => {
  const navigation = useNavigation();

  const handleNextPage = () => {
    navigation.navigate('Learn'); 
  };

  const handleSoloMode = () => {
    navigation.navigate('GoalInput'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Image
          source={require('../images/Merry.png')}
          style={styles.imageOne}
        />
        <TouchableOpacity style={styles.button} onPress={handleNextPage}>
          <Text style={styles.buttonText}>Merry Mode</Text>
        </TouchableOpacity>
        <Text style={styles.description}>Everyone contributes to meet the same goal, together.</Text>
      </View>

      <View style={styles.itemContainer}>
        <Image
          source={require('../images/Competition.png')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.button} onPress={handleNextPage}>
          <Text style={styles.buttonText}>Competition Mode</Text>
        </TouchableOpacity>
        <Text style={styles.description}>Strive to be the first among your friends to reach the goal.</Text>
      </View>

      <View style={styles.itemContainer}>
        <Image
          source={require('../images/Solo.png')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.button} onPress={handleSoloMode}>
          <Text style={styles.buttonText}>Solo Mode</Text>
        </TouchableOpacity>
        <Text style={styles.description}>You can always invite your friends later!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#533D37',
    padding: 16,
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 30, // Space between items
  },
  imageOne: {
    width: 160, // Ensure width and height are the same
    height: 160, // Ensure width and height are the same
    resizeMode: 'contain',
  },
  image: {
    width: 125, // Ensure width and height are the same
    height: 125, // Ensure width and height are the same
    resizeMode: 'contain',
    marginBottom: 20, // Space between image and button
  },
  button: {
    backgroundColor: '#10C1F1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 5, // Space between button and description
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ModeSelector;
