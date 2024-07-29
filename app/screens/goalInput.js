import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GoalInput = ({ handleNextPage }) => {
  const navigation = useNavigation();
  const [goal, setGoal] = useState('');

  const handleIdeaPage = () => {
    navigation.navigate('GoalIdeas'); // Ensure 'GoalIdeas' is the correct name used in your navigator
  };

  const handleNext = () => {
    navigation.navigate('TimeInput'); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/waves.png')}
        style={styles.image}
      />
      <Text style={styles.header}>Let's Do This!</Text>
      <Text style={styles.description}>What do you want to accomplish with your finances?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your goal"
        value={goal}
        onChangeText={text => setGoal(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleIdeaPage}>
          <Text style={styles.buttonText}>Got Ideas?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Let's Go!</Text>
        </TouchableOpacity>
      </View>
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
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 250,
    borderRadius: 40,
    marginBottom: 20,
  },
  header: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#654321',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#654321',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '65%',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%',
  },
  button: {
    flex: 1,
    backgroundColor: '#10C1F1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GoalInput;