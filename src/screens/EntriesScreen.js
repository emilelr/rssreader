import * as React from 'react';
import {View, Text, Button} from 'react-native';

class EntriesScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Entries Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Entries')}
        />
      </View>
    );
  }
}

export default EntriesScreen;
