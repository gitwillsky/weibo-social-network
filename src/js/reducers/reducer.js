import {combineReducers} from 'redux';
import {user} from './user';
import {content} from './content';

const rootReducer = combineReducers({
  content,
  user
});

export default rootReducer;
