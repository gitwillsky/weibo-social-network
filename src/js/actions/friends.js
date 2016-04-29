import {API_SERVER} from './const';

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

export function getFriends(filter, cursor = 0) {
  return dispatch => {
    dispatch(requestFriends());

    fetch(API_SERVER + '/friends/' + cursor, {credentials:'same-origin'})
      .then(response => response.json())
      .then(json => {
        
      })
      .catch(e => notify.show('请求粉丝数据遇到错误'))
  }
}
