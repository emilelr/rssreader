import * as React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import entriesReducer from './src/redux/EntriesReducer';

const store = createStore(entriesReducer);

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Wired',
    rss: 'https://www.wired.com/feed/rss'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Slashdot',
    rss: 'http://rss.slashdot.org/Slashdot/slashdot'
  }
];

/*
const Item = ({ title, onPress }) => (

);
*/

function EntriesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Entries Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Entries')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => { navigation.navigate('Entries') }}
      >
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});

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
