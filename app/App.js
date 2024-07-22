import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreens from './screens/introScreens';
import LandingScreen from './screens/landingScreen';
import LoginScreen from './screens/login';
import SignUpScreen from './screens/signup';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Intro" component={IntroScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

