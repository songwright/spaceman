import React from 'react';
import App from './src/App';
import { AppRegistry, View } from 'react-vr';

export default class spaceman extends React.Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
};

AppRegistry.registerComponent('spaceman', () => spaceman);
