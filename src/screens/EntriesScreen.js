import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

class EntriesScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Entries Screen: {this.props.entries.entries.length}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Entries')}
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
