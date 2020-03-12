import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  AmbientLight,
  StyleSheet,
  Model
} from 'react-vr';

export default class spaceman extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight instensity={0.25} />
        <Pano source={asset('chess-world.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('spaceman', () => spaceman);
