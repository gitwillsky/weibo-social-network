import {API_SERVER} from './const';
import {notify} from 'react-notify-toast';

export const REQUEST_TOKEN = 'REQUEST_TOKEN';
export function requestToken() {
  return {
    type: REQUEST_TOKEN
  }
}

export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';
export function receiveToken(json) {
  return {
    type: RECEIVE_TOKEN,
    token: json,
    receiveAt: Date.now()
  }
}

export function getTokenFromServer() {
  return dispatch => {
    dispatch(requestToken())
    // use credentials for send cookie.
    return fetch(API_SERVER+'/token', {credentials:'same-origin'})
      .then(response => response.json())
      .then(json => dispatch(receiveToken(json)))
      .catch(e => notify.show('发起请求失败'))
  }
}
