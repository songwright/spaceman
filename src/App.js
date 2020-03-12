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
  constructor(props) {
    super(props)
    this.state = {
      background: 'space.jpg'
    }
  }
  render() {
    return (
      <View>
        <AmbientLight instensity={ 2.5 } />
        <Pano source={asset('chess-world.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('spaceman', () => spaceman);
