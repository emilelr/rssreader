import * as React from 'react';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import * as rssParser from 'react-native-rss-parser';

class EntriesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginTop: 16, marginBottom: 16 }}
        onPress={() => {
          console.log('item', item);
          const link = item.links[0].url;
          this.props.navigation.navigate('Webview', {
            link,
          })
          //retrieve(item.rss);
          //this.props.navigation.navigate('Entries', {
          //    rss: item.rss,
          //  })
        }}
        >
        <Text style={{ fontSize: 20 }}>{item.title}</Text>
        <Text style={{ fontSize: 14 }}>{item.description}</Text>
        <Text style={{ fontSize: 20 }}>{item.published}</Text>
      </TouchableOpacity>
    );
  };

  componentDidMount() {
    const params = this.props.route.params;
    const link = params.rss;

    return fetch(link)
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        console.log('rss', rss);
        console.log(rss.title);
        console.log(rss.items.length);
        const title = `(${rss.items.length}) ${rss.description}`;
        this.props.navigation.setOptions({title});
        this.setState({
          items: rss.items,
        })
      });
  }

  render() {
    const params = this.props.route.params;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FlatList
          data={this.state.items}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default EntriesScreen;
