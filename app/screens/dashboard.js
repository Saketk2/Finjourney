import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const App = () => {
  const [goal, setGoal] = useState('');
  const navigation = useNavigation(); // Call the hook here at the top of the component

  useEffect(() => {
    const fetchGoal = async () => {
      try {
        const savedGoal = await AsyncStorage.getItem('goal');
        if (savedGoal) setGoal(savedGoal);
      } catch (error) {
        console.error('Failed to fetch the goal:', error);
      }
    };
    fetchGoal();
  }, []);

  const handleChange = () => {
    navigation.navigate('GoalInput'); // Use the navigation object here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Journey</Text>
      <View style={styles.goalContainer}>
        <Text style={styles.subheader}>My Goal: </Text>
        <Text style={styles.goal}>{goal}</Text>
        <TouchableOpacity style={styles.button} onPress={handleChange}>
          <Text style={styles.buttonText}>Start Over</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subheaderCentered}>My Money</Text>
      <View style={styles.moduleContainer}> </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(4, 109, 242, 0.6)',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  goalContainer: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Align vertically
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  goal: {
    fontSize: 18,
    color: '#000',
    marginLeft: 5, // Add a small space between "My Goal" and the goal text
  },
  subheaderCentered: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5, // Rounded corners
    height: 5, // Fixed height for the button
    justifyContent: 'center', // Vertically center content
    alignItems: 'center', // Horizontally center content
    borderColor: '#fff', // Border color
    borderWidth: 0.5,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: 75,
    alignSelf: 'center',
    margin: 10,
},
buttonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center', // Ensures text alignment
},
moduleContainer: {
  backgroundColor: '#fff',
  width: '95%', // Adjust width as needed
  height: '70%', // Adjust height as needed
  padding: 20, // Padding inside the box
  borderRadius: 10, // Rounded corners
  shadowColor: '#000', // Shadow color
  shadowOffset: { width: 0, height: 2 }, // Shadow offset
  shadowOpacity: 0.1, // Shadow opacity
  shadowRadius: 5, // Shadow blur radius
  elevation: 5, // Elevation for Android
  marginTop: 10,
  
},
});

export default App;
