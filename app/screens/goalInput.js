import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GoalInput = ({ handleNextPage }) => {
    const navigation = useNavigation();
    const [goal, setGoal] = useState('');
  
    const handleIdeaPage = () => {
      navigation.navigate('GoalIdeas'); // Ensure 'GoalIdeas' is the correct name used in your navigator
    };

    return (
        <View style={styles.container}>
          <Image
            source={require('../images/waves.png')}
            style={styles.image}
          />
          <Text style={styles.header}>Let's Do This!</Text>
          <Text style={styles.description}>What do you want to accomplish with your finances?</Text>
          <TouchableOpacity style={styles.button} onPress={handleIdeaPage}>
            <Text style={styles.buttonText}>Got Ideas?</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Enter your goal"
            value={goal}
            onChangeText={text => setGoal(text)}
        />
        </View>
      );
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5F1F4',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 250,
    top: 50,
    borderRadius: 40,
  },
  header: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#654321',
    bottom: 350,
    padding: 15,
    textAlign: 'center',
    paddingTop: 10,
  },
  description: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#654321',
    bottom: 370,
    textAlign: 'center',
    padding: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '40%',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

export default GoalInput;
