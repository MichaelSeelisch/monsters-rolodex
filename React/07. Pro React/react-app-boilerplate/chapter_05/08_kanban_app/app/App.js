import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import KanbanBoardContainer from './KanbanBoardContainer';
import KanbanBoard from './KanbanBoard';
import EditCard from './EditCard';
import NewCard from './NewCard';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={KanbanBoardContainer}>
      <Route path="/" component={KanbanBoard}>
        <Route path="new" component={NewCard} />
        <Route path="edit/:card" component={EditCard} />
      </Route>
    </Route>
  </Router>),
  document.getElementById('root')
);
