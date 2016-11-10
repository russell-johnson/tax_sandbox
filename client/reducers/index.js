import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import lists from './lists'
import robots from './robots'

const rootReducer = combineReducers({
  routing,
  lists,
  robots
 });

export default rootReducer;
