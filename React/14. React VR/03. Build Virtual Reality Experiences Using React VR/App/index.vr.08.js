import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class App extends React.Component {
  render() {
    return (
      <View>

        <Pano 
          source={asset('chess-world.jpg')}
        />

        <VrButton
          // disabled
          onClick={() => {
            console.log('VrButton: clicked!');
          }}
          onLongClick={() => {
            console.log('VrButton: long clicked!');
          }}
          onButtonPress={() => {
            console.log('VrButton: button press!');
          }}
          onButtonRelease={() => {
            console.log('VrButton: button release!');
          }}
          longClickDelayMS={4000}
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [{
              translate: [0, 0, -1]
            }]
          }}
        >
          <Text>Update</Text>
        </VrButton>
        
        {/*
          <View 
            style={{
              width: 2,
              height: 2,
              backgroundColor: '#FFF',
              layoutOrigin: [0.5, 0.5],
              transform: [{
                translate: [0, 0, -3]
              }]
            }}
            onEnter={() => {
              console.log('onEnter');
            }}
            onExit={() => {
              console.log('onExit');
            }}
            onMove={(event) => {
              console.log('onMove', event.nativeEvent);
            }}
            onInput={(event) => {
              console.log('onMove', event.nativeEvent.inputEvent.type);
              console.log('onMove', event.nativeEvent.inputEvent.eventType);
            }}
          />
          */}
      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => App);
