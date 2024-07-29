import React, { useState } from 'react'; // Import useState
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GoalIdeas = () => {
  const navigation = useNavigation();

  const handleIdeaPage = () => {
    navigation.navigate('GoalInput'); // Ensure 'GoalInput' is the correct name used in your navigator
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../images/blueRectangle.png')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Go on a hot air balloon</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../images/greenRectangle.png')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Buy a new car</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../images/blueRectangle.png')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Go skydiving</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../images/greenRectangle.png')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Create an emergency fund</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../images/blueRectangle.png')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Pay off college loans</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../images/greenRectangle.png')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Travel to Paris</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../images/blueRectangle.png')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Pay the bills</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../images/greenRectangle.png')}
            style={styles.image}
          />
          <Text style={styles.imageText}>Buy a Mother's Day present</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleIdeaPage}>
        <Text style={styles.buttonText}>I'm Ready!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5F1F4',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  imageContainer: {
    position: 'relative',
    marginHorizontal: 8,
  },
  image: {
    width: 170,
    height: 100, // Adjust based on the actual aspect ratio of your images
    borderRadius: 10,
  },
  imageText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#EDF4E9', // Semi-transparent background for better readability
    padding: 5,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#654321',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GoalIdeas;
