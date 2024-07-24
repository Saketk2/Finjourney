import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreens from './screens/introScreens';
import LandingScreen from './screens/landingScreen';
import LoginScreen from './screens/login';
import SignUpScreen from './screens/signup';
import GoalInput from './screens/goalInput';
import GoalIdeas from './screens/goalIdeas';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Intro" component={IntroScreens} />
        <Stack.Screen name="GoalInput" component={GoalInput} />
        <Stack.Screen name="GoalIdeas" component={GoalIdeas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

