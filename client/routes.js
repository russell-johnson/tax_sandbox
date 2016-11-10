import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import Robots from './components/Robots';
import NoMatch from './components/NoMatch';
import List from './components/List';
import Lists from './components/Lists';
import Shamwows from './components/Shamwows';
import Shamwow from './components/Shamwow';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Lists} />
      <Route path="/lists/:id" component={List} />
      <Route path="/robots" component={Robots} />
      <Route path="/shamwows" component={Shamwows} />
      <Route path="/shamwows/:id" component={Shamwow} />
      <Route path="*" status={404} component={NoMatch}/>
    </Route>
  </Route>
)
