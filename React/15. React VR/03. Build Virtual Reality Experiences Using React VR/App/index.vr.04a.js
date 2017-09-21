import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Text,
  PointLight,
  Sphere,
  Box,
  Cylinder,
  Plane
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>

        <Sphere 
          style={{
            color: 'lightblue',
            transform: [{
              translateZ: -2
            }]
          }}
          lit
          heightSegments={20}
          widthSegments={20}
          texture={asset('mountains.jpg')}
          // wireframe
          // radius={0.2}
        />

        <PointLight
          intensity={1}
          style={{
            transform: [{
              translate: [0, 700, 700]
            }]
          }}
        />

      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
