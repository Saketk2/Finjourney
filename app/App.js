import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreens from './screens/introScreens';
import GoalInput from './screens/goalInput';
import GoalIdeas from './screens/goalIdeas';
import TimeInput from './screens/timeInput';
import ModeSelector from './screens/modeSelector';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={IntroScreens} />
        <Stack.Screen name="GoalInput" component={GoalInput} />
        <Stack.Screen name="GoalIdeas" component={GoalIdeas} />
        <Stack.Screen name="TimeInput" component={TimeInput} />
        <Stack.Screen name="ModeSelector" component={ModeSelector} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
