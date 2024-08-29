import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Friends = () => {
  const navigation = useNavigation();

  const handleNextPage = () => {
    navigation.navigate('GoalIdeas'); 
  };

  // Assigning TextInput to a variable
  const inputField = (
    <TextInput
      style={styles.input}
      placeholder="Input Phone Number here!"
    />
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/Mountain_curvy_cloud.png')}
        style={styles.mountainImage}
      />
      <Image
        source={require('../images/Squad.png')}
        style={styles.squadImage}
      />
      <Text style={styles.header}>Assemble the Squad</Text>
      <Text style={styles.subheader}>Start your financial journey alongside your friends by inviting them to complete a goal with you!</Text>
      {inputField}
      <TouchableOpacity style={styles.button} onPress={handleNextPage}>
        <Text style={styles.buttonText}>Invite</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bcb3b0',
    padding: 16,
    position: 'relative',
  },
  header: {
    fontSize: 40,
    color: '#FFFFFF',
    position: 'absolute',
    top: 20,
    zIndex: 3,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 15,
    color: '#FFFFFF',
    position: 'absolute',
    top: 90,
    zIndex: 3,
    textAlign: 'center',
    width: '80%',
  },
  mountainImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  squadImage: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: 130,
    zIndex: 2,
  },
  input: {
    position: 'absolute',
    bottom: 240, // Adjusted to move the input field higher
    width: '60%',
    height: 40,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black', // Black border
    zIndex: 3,
  },
  button: {
    position: 'absolute',
    bottom: 160, // Adjusted to move the button higher
    backgroundColor: '#10C1F1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    zIndex: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Friends;
