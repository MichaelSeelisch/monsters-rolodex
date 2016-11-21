'use strict';

import React from 'react';
import Router from 'react-router';
import Routes from './Routes.jsx';
import { render } from 'react-dom';

render(
  Routes,
  document.getElementById('container')
);
