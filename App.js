import * as React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HomeScreen from './src/screens/HomeScreen';
import EntriesScreen from './src/screens/EntriesScreen';
import entriesReducer from './src/redux/EntriesReducer';

const store = createStore(entriesReducer);

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Entries" component={EntriesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
