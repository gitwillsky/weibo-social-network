import {RECEIVE_USER, REQUEST_USER} from '../actions/user';

export function user(state = {
  isFetching: false,
  id: 0
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
