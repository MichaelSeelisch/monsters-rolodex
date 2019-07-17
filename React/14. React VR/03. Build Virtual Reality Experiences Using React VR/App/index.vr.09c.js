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
      fadeIn: new Animated.Value(0),
      spring: new Animated.Value(-1)
    }
  }

  componentDidMount() {
    // Animated.parallel([
    Animated.sequence([
      Animated.timing(this.state.fadeIn, { toValue: 1, duration: 3000 }),
      Animated.delay(1000),
      Animated.spring(this.state.spring, {
        toValue: 0, tension: 1, friction: 2
       })
    ]).start()
  }

  render() {
    return (
      <View>

        <Animated.Image 
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translateZ: -1 },
              { translateY: this.state.spring }
            ],
            opacity: this.state.fadeIn,
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
