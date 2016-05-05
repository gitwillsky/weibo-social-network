import {REQUEST_FRIENDS, RECEIVE_FRIENDS} from '../actions/friends';

export function friends(state = {isFetching: false, users:[]}, action) {
  switch (action.type) {
    case REQUEST_FRIENDS:
        return Object.assign({}, state, {isFetching: true});
    case RECEIVE_FRIENDS:
        return Object.assign({}, state, Object.assign(action.users, {isFetching: false}));
    default:
      return state;
  }
}
