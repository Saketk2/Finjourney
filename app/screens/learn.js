import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput style={styles.searchBar} placeholder="Search..." />
        <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Daily Financial Expedition</Text>
      <View style={styles.expedContainer}> </View>
      <Text style={styles.header}>Bite-sized Lessons for Smooth Sailing</Text>
      <View style={styles.modulesRow}>
        <View style={styles.moduleContainer}> </View>
        <View style={styles.moduleContainer}> </View>
      </View>
      <View style={styles.modulesRow}>
        <View style={styles.moduleContainer}> </View>
        <View style={styles.moduleContainer}> </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Align items at the top of the container
    alignItems: 'center', // Center contents horizontally
    padding: 20, // Padding to add some space from the edges
    backgroundColor: '#f0e6a5',
  },
  searchRow: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically within the row
    width: '100%', // Ensure the row spans the full width of the container
    marginBottom: 20, // Space below the search bar row
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    width: '80%', // Adjust width as needed
    marginRight: 10, // Space between the search bar and button
  },
  submitButton: {
    backgroundColor: '#007BFF', // Button color
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  header: {
    fontSize: 20, // Adjusted title font size
    fontWeight: 'bold',
    color: '#000', // Black color for better contrast
    width: '100%', // Ensure the header spans the full width
    textAlign: 'center', // Center the text horizontally
    marginTop: 20, // Space above the header from the search bar row
    marginBottom: 20, // Space below the header
  },
  expedContainer: {
    backgroundColor: '#fff',
    width: '90%', // Adjust width as needed
    height: 150, // Adjust height as needed
    padding: 20, // Padding inside the box
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    elevation: 5, // Elevation for Android
    marginBottom: 20, // Space below the expedContainer
  },
  modulesRow: {
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space out the items
    width: '100%', // Full width of the container
    marginBottom: 20, // Space below each row
  },
  moduleContainer: {
    backgroundColor: '#fff',
    width: '48%', // Adjust width as needed
    height: 150, // Adjust height as needed
    padding: 20, // Padding inside the box
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    elevation: 5, // Elevation for Android
  },
});

export default App;
