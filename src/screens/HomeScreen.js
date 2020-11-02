import * as React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

const DATA = [
  {
    id: '34cf4554-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Nasa',
    rss: 'http://www.nasa.gov/rss/dyn/breaking_news.rss'
  },
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

function retrieve(link) {
  return fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log('rss', rss);
      console.log(rss.title);
      console.log(rss.items.length);
      dispatch({
        type: 'UPDATE_ENTRIES',
        payload: rss.items
      });
    });
}

class HomeScreen extends React.Component {
  renderItem = (item) => {
    return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        console.log('retrieving');
        //retrieve(item.rss);
        this.props.navigation.navigate('Entries', {
            rss: item.rss,
          })
      }}
      >
      <Text>{item.title}</Text>
    </TouchableOpacity>)
  };


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={DATA}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
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

export default HomeScreen;
