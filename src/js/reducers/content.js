import {SELECT_CONTENT} from '../actions/content';

export function content(state={id:0}, action) {
  switch (action.type) {
    case SELECT_CONTENT:
      return Object.assign({}, state, {id: action.id});
    default: return state;
  }
}
