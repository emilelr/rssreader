import * as React from 'react';
import { WebView } from 'react-native-webview';

class WebviewScreen extends React.Component {
  render() {
    const params = this.props.route.params;
    console.log('params', params);
    return (
        <WebView
          source={{ uri: params.link }}
          style={{ flex: 1 }}
          useWebKit
        />
    );
  }
}

export default WebviewScreen;
