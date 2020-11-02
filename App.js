import * as React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import EntriesScreen from './src/screens/EntriesScreen';
import WebviewScreen from './src/screens/WebviewScreen';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Entries" component={EntriesScreen} />
          <Stack.Screen name="Webview" component={WebviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
