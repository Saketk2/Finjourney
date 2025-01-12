import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Add this import
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import IntroScreens from './screens/introScreens';
import GoalInput from './screens/goalInput';
import GoalIdeas from './screens/goalIdeas';
import TimeInput from './screens/timeInput';
import ModeSelector from './screens/modeSelector';
import Friends from './screens/friends';

import Learn from './screens/learn';
import Profile from './screens/profile';
import Dashboard from './screens/dashboard';
import Feed from './screens/feed';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const NavigationBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Dashboard') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Feed') iconName = focused ? 'document' : 'document-outline';
          else if (route.name === 'Learn') iconName = focused ? 'book' : 'book-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'lightblue',
        tabBarInactiveTintColor: 'lightblue',
        tabBarStyle: {
          backgroundColor: '#FFFFFF', // Set your desired tab bar background color
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Learn" component={Learn} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={IntroScreens} />
        <Stack.Screen name="GoalInput" component={GoalInput} />
        <Stack.Screen name="GoalIdeas" component={GoalIdeas} />
        <Stack.Screen name="TimeInput" component={TimeInput} />
        <Stack.Screen name="ModeSelector" component={ModeSelector} />
        <Stack.Screen name="Friends" component={Friends} />

        <Stack.Screen
          name="Dashboard"
          component={NavigationBar} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Feed"
          component={NavigationBar}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Learn"
          component={NavigationBar} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Profile"
          component={NavigationBar}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
