import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreenOne from './screens/introScreenOne';  // Correct path to the component

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroOne">
        <Stack.Screen 
          name="IntroOne"
          component={IntroScreenOne}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

