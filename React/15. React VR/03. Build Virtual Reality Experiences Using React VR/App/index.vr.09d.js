import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box,
  DirectionalLight,
  AmbientLight,
  Animated
} from 'react-vr';


const AnimatedBox = Animated.createAnimatedComponent(Box);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.rotation, {
        duration: 10000,
        toValue: 930
      }
    ).start()
  }

  render() {
    return (
      <View>

        <AnimatedBox 
          lit
          dimWidth={2}
          dimDepth={2}
          dimHeight={1}
          style={{
            transform: [
              { translate: [0, 0, -10] },
              { rotateY: this.state.rotation },
              { rotateX: -40 }
            ]
          }}
        />

        <AmbientLight
          intensity={ 0.5 }
        />

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
