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
import { HomeStack } from './screens/Home/home.stack';
import WebviewScreen from './screens/Webview';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            <Tab.Screen
              name="Home"
              component={HomeStack}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="AboutStack"
              component={WebviewScreen}
              options={{
                tabBarLabel: 'WebView',
                tabBarIcon: ({ color, size }) => (
                  <Icon name="internet-explorer" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

export default App;
