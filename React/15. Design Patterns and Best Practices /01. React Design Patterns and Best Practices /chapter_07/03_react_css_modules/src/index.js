import React from 'react'; 
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';

import styles from './index.css';

const Button = () => <button styleName='button'>Click Me!</button>;

const EnhancedButton = CSSModules(Button, styles);

ReactDOM.render(
  <EnhancedButton />, document.body
);