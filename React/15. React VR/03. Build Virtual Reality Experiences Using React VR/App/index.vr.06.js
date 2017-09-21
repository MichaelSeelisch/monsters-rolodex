import React from 'react';
import {
  AppRegistry,
  asset,
  View,
  AmbientLight,
  DirectionalLight,
  Model
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>
        
        <Model 
          source={{
            obj: asset('Astronaut.obj'),
            mtl: asset('astronaut.mtl')
          }}
          style={{
            // color: 'orange',
            transform: [{
              translate: [0, -2, -4]
            }]
          }}
          lit
          texture={
            asset('Spacesuit_D.png')
          }
          // wireframe
        />

        <DirectionalLight
          style={{
            transform: [{
              translateX: -1000
            }]
          }}
        />

        <AmbientLight 
          intensity={0.4}
        />

      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
