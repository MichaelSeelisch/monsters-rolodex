import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box,
  DirectionalLight,
  Animated
} from 'react-vr';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  springValue: new Animated.Value(-2),
      decayValue: new Animated.Value(-3.5),
    }
  }

  componentDidMount() {
    Animated.decay(
      this.state.decayValue,
      {
        velocity: 0.01,
        deceleration: 0.9985
      }
    ).start()

    /*
      Animated.spring(
        this.state.springValue,
        {
          toValue: 0,
          tension: 1,
          friction: 2
        }
      ).start()
    */
  }

  render() {
    return (
      <View>

        <Animated.Image 
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translateZ: -1 },
              { translateY: this.state.decayValue }
            ],
            height: 0.5,
            width: 0.5,
          }}
          source={asset('mountains.jpg')}
        />

        {/*
          <Animated.View 
            style={{
              opacity: this.state.fadeIn,
              layoutOrigin: [0.5, 0.5],
              transform: [{
                translateZ: -1
              }],
              height: 0.25,
              width: 0.25,
              backgroundColor: '#335'
            }}
          >
            <Text>Hello</Text>
          </Animated.View>
          */}
        
        {/*
          <Animated.Text 
            style={{
              opacity: this.state.fadeIn,
              layoutOrigin: [0.5, 0.5],
              transform: [{
                translateZ: -1
              }],
            }}
          >
            Hello
          </Animated.Text>
        */}

        <DirectionalLight
          style= {{
            transform: [{
              translate: [-200, 700, 0]
            }]
          }}
        />   
      
      </View> 
    )
  }
};

AppRegistry.registerComponent('App', () => App);
