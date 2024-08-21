import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Friends = () => {
  const navigation = useNavigation();

  const handleNextPage = () => {
    navigation.navigate('GoalIdeas'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Assemble the Squad</Text>
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
  header: {
    fontSize: 100,
    color: '#FFFFFF',
  },
});

export default Friends;
