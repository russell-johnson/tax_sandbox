import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import list from './lists'

const rootReducer = combineReducers({
  routing: routerReducer,
  list: list
 });

export default rootReducer;
