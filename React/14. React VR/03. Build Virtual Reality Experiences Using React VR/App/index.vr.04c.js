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

        <Cylinder
          wireframe
          segments={ 4 }
          dimHeight={ 0.6 }
          radiusBottom={ 0.35 }
          radiusTop={ 0 }
          style={{
            transform: [{
              translateZ: -2
            }]
          }}
        />

        <PointLight
          intensity={ 1 }
          style={{
            transform: [{
              translate: [ 0, 700, 700 ]
            }]
          }}
        />

      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
