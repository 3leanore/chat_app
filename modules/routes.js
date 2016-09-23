import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Login from './Login';
import MessageBox from './MessageBox';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/:userName" component={MessageBox}/>
  </Route>
);
