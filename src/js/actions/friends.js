import {API_SERVER} from './const';
import {notify} from 'react-notify-toast';

export const REQUEST_FRIENDS = 'REQUEST_FRIENDS';
export function requestFriends() {
  return {
    type: REQUEST_FRIENDS
  }
}

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export function receiveFriends(json) {
  return {
    type: RECEIVE_FRIENDS,
    users: json
  }
}

export function getFriends(cursor = 0, filter) {
  return dispatch => {
    dispatch(requestFriends());

    fetch(API_SERVER + '/friends/' + cursor, {credentials:'same-origin'})
      .then(response => response.json())
      .then(json => {
          if(filter) {json.users.filter(filter);}
          dispatch(receiveFriends(json));
      })
      .catch(e => notify.show('请求粉丝数据遇到错误'))
  }
}
