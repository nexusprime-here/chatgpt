/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import type { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from '../constants/Colors';

import ChatScreen from '../screens/Chat';
import MenuScreen from '../screens/Menu';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const isDarkTheme = colorScheme === 'dark';

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <ThemeProvider theme={isDarkTheme ? Colors.dark : Colors.light}>
        <RootNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Menu' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */