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
        <Pano source={asset(this.state.background)}/>
        <Model
          source={{
            obj: asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.obj'),
            mtl: asset('/nasa-aqua-satellite-obj/nasa-aqua-satellite.mtl')
          }}
          style={{
            transform: [
              { translate: [-1, 0, -0.75] },
              { scale: 0.075 },
              { rotateX: 180 },
              { rotateY: -360 },
            ]
          }}
        />
      </View>
    );
  }
};
