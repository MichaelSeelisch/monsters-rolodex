import { configure, addDecorator, loadStories } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import { setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import React from 'react';

addDecorator((story) => (
  <div>
    <h1>Examples</h1>
    {story()}
  </div>
));

addDecorator(withKnobs);

setAddon(infoAddon);

configure(() => {
    const req = require.context('../', true, /.stories.js$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);

configure(loadStories, module);