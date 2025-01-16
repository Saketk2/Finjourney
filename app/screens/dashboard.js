import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// Get the screen width to adjust spacing based on screen size
const { width } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Journey</Text>
      <View style={styles.innercontainer}>
        <Text style={styles.subheader}>My Goals</Text>
        <Text style={styles.subheader}>My Money</Text>
      </View>
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
  innercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adds space between the subheaders
    width: '100%', // Take up full width
    paddingHorizontal: width * 0.05, // Adjusts space between items dynamically
    marginTop: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  subheader: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    padding: 30, 
  },
});

export default App;
