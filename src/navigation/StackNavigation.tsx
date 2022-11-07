import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../interfaces/navigation/StackNavigation';
import { HomeScreen, DetailsScreen } from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: 'white'
      }
    }}
  >
    <Stack.Screen name='HomeScreen' component={HomeScreen} />
    <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
  </Stack.Navigator>
);

export default StackNavigation;
