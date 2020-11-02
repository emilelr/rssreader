import * as React from 'react';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as rssParser from 'react-native-rss-parser';

class EntriesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      items: [],
    };
  }

  renderItem = (item) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 10
        }}
        onPress={() => {
          console.log('retrieving');
          //retrieve(item.rss);
          //this.props.navigation.navigate('Entries', {
          //    rss: item.rss,
          //  })
        }}
        >
        <Text>{item.title}</Text>
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
        {/*<Text>Entries Screen: {this.props.entries.entries.length}</Text>
        */}
        {/*
        <Button
          title={`Go to Details: ${params.rss}`}
          onPress={() => navigation.navigate('Entries')}
        />*/}

        <FlatList
          data={this.state.items}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id}
        />


      </View>
    );
  }
}

const mapStateToProps = (state) => (
{
  entries: state.entries,
});

export default connect(mapStateToProps)(EntriesScreen);
