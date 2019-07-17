import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View,
  Text,
  Sphere,
  Box,
  Cylinder,
  Plane,
  AmbientLight,
  DirectionalLight,
  PointLight,
  SpotLight
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        
        <SpotLight
          style={{
            transform: [{
              translateZ: -5
            }]
          }}
        />

        <Sphere
          lit
          heightSegments={20}
          widthSegments={20}
          style={{
            color: 'yellow',
            transform: [{
              translate: [-1.5, 0, -4]
            }]
          }}
          
        />

        <Box
          lit
          style={{
            color: 'blue',
            transform: [{
              translate: [ 0, 0, -6 ]
            }]
          }}
        />

        <Cylinder
          lit
          segments={20}
          radiusTop={ 0 }
          style={{
            color: 'red',
            transform: [{
              translate: [ 1.5, 0, -4 ]
            }]
          }}
        />

        <Plane
          lit
          dimWidth={ 4 }
          dimHeight={ 4 }
          style={{
            color: 'green',
            transform: [
              { translate: [ 0, -0.5, -5 ] },
              { rotateX: -90}
            ]
          }}
        />

      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
