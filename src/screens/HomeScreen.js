import * as React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

//our default hardcoded homescreen data
const DATA = [
  {
    id: '1',
    title: 'Nasa',
    rss: 'http://www.nasa.gov/rss/dyn/breaking_news.rss',
  },
  {
    id: '2',
    title: 'Wired',
    rss: 'https://www.wired.com/feed/rss',
  },
  {
    id: '3',
    title: 'BBC',
    rss: 'http://feeds.bbci.co.uk/news/rss.xml',
  },
];

class HomeScreen extends React.Component {
  renderItem = (item) => {
    return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        console.log('retrieving');
        this.props.navigation.navigate('Entries', {
            rss: item.rss,
          })
      }}
      >
      <Text style={{ fontSize: 30 }}>{item.title}</Text>
    </TouchableOpacity>)
  };

  render() {
    //we use flatlist as it is the most efficient when displaying items of the same format
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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});

export default HomeScreen;
