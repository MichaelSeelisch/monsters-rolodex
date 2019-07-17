import React from 'react';

import '../styles/Calculator.css';

import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import * as Helper from '../utilities/helper';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? Helper.tryConvert(temperature, Helper.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? Helper.tryConvert(temperature, Helper.toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />

      </div>
    );
  }
};

export default Calculator;
