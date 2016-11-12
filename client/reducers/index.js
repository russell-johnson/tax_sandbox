import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import lists from './lists';
import robots from './robots';
import shamwows from './shamwows';
import datBois from './datbois';

const rootReducer = combineReducers({
  routing,
  lists,
  robots,
  shamwows,
  datBois
 });

export default rootReducer;
