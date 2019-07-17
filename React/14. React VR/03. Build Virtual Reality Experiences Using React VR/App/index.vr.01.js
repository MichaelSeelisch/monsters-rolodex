import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Pano
          /*
            source={asset('chess-world.jpg')}
          */

          source={[
            asset('space_right.png'),
            asset('space_left.png'),
            asset('space_up.png'),
            asset('space_down.png'),
            asset('space_back.png'),
            asset('space_front.png'),
          ]}

          onLoad={() => { console.log('Loaded') }}
          style={{
            transform: [{ rotateY: -20 }]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
