import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalIdeas = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here are some ideas for your financial goals!</Text>
      {/* Add your ideas content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GoalIdeas;
