import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const TimeInput = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [unit, setUnit] = useState('Minutes');

  const handleNextPage = () => {
    navigation.navigate('ModeSelector'); 
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/Clock.png')}
        style={styles.image}
      />
      <Text style={styles.header}>How Long Will This Take?</Text>
      <Text style={styles.description}>Please enter the duration and select the unit. You can always change this later!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.textInput, styles.inputFlex]}
          keyboardType="numeric"
          placeholder="Enter amount"
          value={value}
          onChangeText={text => setValue(text)}
        />
        <RNPickerSelect
          placeholder={{ label: 'Select unit', value: null }}
          onValueChange={(value) => setUnit(value)}
          items={[
            { label: 'Minutes', value: 'Minutes' },
            { label: 'Hours', value: 'Hours' },
            { label: 'Days', value: 'Days' },
            { label: 'Weeks', value: 'Weeks' },
            { label: 'Months', value: 'Months' }
          ]}
          style={pickerStyles}
          value={unit}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNextPage}>
          <Text style={styles.buttonText}>Last Step</Text>
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
    backgroundColor: '#188DE9',
    padding: 16,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 40,
    marginBottom: 20,
  },
  header: {
    fontSize: 50,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginRight: 0, // No margin between input and dropdown
  },
  inputFlex: {
    flex: 1,
    marginRight: -1, // Remove space between input and dropdown
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
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

const pickerStyles = StyleSheet.create({
  inputIOS: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    flex: 1, // Match the input height and width
    marginLeft: -1, // Remove space between dropdown and input
  },
  inputAndroid: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    flex: 1, // Match the input height and width
    marginLeft: -1, // Remove space between dropdown and input
  },
});

export default TimeInput;
