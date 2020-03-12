import React from 'react';
import { Text, View, StyleSheet } from 'react-vr';

export default class TextScene extends React.Component {
  render () {
    return (
      <View>
        <Text
          style={{
            background: '#777879',
            fontSize: 0.5,
            fontWeight: '400',
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              { translate: [-4, 1, -0.5] },
              { scale: 0.5 },
              { rotateY: 90 }
            ]
          }}
        >Aqua Satellite click here</Text>
        <Text
          style={{
            background: '#777879',
            fontSize: 0.5,
            fontWeight: '400',
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [
              { translate: [4, 0, -10] },
              { scale: 1 }
            ]
          }}
        >Loral-1300Com</Text>
      </View>
    )
  }
}