/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NativeBaseProvider } from 'native-base';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import { HomeStack } from './screens/home.stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NativeBaseProvider config={config}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShadowVisible: false,
              headerShown: false,
              headerTitleStyle: { alignSelf: 'center' },
            })}>
            <Tab.Screen name="Home" component={HomeStack} />
            {/* <Tab.Screen name="AboutStack" component={AboutStack} />
          <Tab.Screen name="Contact" component={Contact} /> */}
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
