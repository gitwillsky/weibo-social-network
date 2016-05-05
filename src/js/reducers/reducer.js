import {combineReducers} from 'redux';
import {user} from './user';
import {content} from './content';
import {friends} from './friends';

const rootReducer = combineReducers({
  content,
  user,
  friends
});

export default rootReducer;
