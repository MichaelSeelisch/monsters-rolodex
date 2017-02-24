'use strict';

import Reflux from 'reflux';

import SearchAction from '../actions/search';
import { searchService } from '../service/index';

let _history = {};