'use strict';

import { Config } from '../config';
import SearchService from './search';

exports.searchService = new SearchService(Config.urls.search);