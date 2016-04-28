import {combineReducers} from 'redux';
import {token} from './token';
import {user} from './basic';

const rootReducer = combineReducers({
  token,
  user
});

export default rootReducer;
