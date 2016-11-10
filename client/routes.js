import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import Robots from './components/Robots'
import DatBois from './components/DatBois'
import NoMatch from './components/NoMatch';

export default (
  <Route>
    <Route path="/" component={App} />
    <Route path="/robots" component={Robots} />
    <Route path="/datbois" component={DatBois} />
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
