import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Text
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        
        <Text
          style={{
            transform: [{ translateZ: -1 }],
            color: 'lightblue',
            backgroundColor: '#335',
            fontSize: 0.1,
            fontWeight: 700,
            width: 0.45,
            height: 0.45,
            textAlign: 'center',
            textAlignVertical: 'center',
            layoutOrigin: [0.5, 0.5]
          }}
        >
          Hello VR
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
