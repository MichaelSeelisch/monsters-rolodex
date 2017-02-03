'use strict';

import Reflux from 'reflux';

let actions = {
  performSearch: Reflux.createAction('performSearch'),
  emitSearchData: Reflux.createAction('emitSearchData')
};

export default actions;