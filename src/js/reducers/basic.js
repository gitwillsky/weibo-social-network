import {RECEIVE_USER, REQUEST_USER} from '../actions/basic';

export function user(state = {
  isFetching: false
},action) {
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, Object.assign({}, action.user, {isFetching:false}));
    case REQUEST_USER:
      return Object.assign({}, state, {isFetching: true});
    default:
      return state;
  }
}
