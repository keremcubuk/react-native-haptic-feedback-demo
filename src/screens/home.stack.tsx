import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '.';
import Common from './home.common';
import IOS from './home.ios';
import Android from './home.android';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerTitle: 'Common', headerTitleAlign: 'center' }}
        name="common"
        component={Common}
      />
      <Stack.Screen
        options={{ headerTitle: 'iOS', headerTitleAlign: 'center' }}
        name="ios"
        component={IOS}
      />
      <Stack.Screen
        options={{ headerTitle: 'Android', headerTitleAlign: 'center' }}
        name="android"
        component={Android}
      />
    </Stack.Navigator>
  );
};
