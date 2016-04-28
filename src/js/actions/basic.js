import {
    WEIBO_SERVER,
    APPKEY
} from './const';
import {notify} from 'react-notify-toast';

export const REQUEST_USER = 'REQUEST_USER';
export function requestUser() {
    return {
        type: REQUEST_USER
    }
}

export const RECEIVE_USER = 'RECEIVE_USER';
export function receiveUser(json) {
    return {
        type: RECEIVE_USER,
        user: json,
        receiveAt: Date.now()
    }
}

export function getUserFromServer(accessToken,uid) {
    return dispatch => {
        dispatch(requestUser())
            // use credentials for send cookie.
        return fetch(WEIBO_SERVER +
                      '/users/show.json?access_token='
                      + accessToken + "&uid=" + uid + "&source=" + APPKEY, {
                mode: 'no-cors'
            })
            .then(response => response.json())
            .then(json => dispatch(receiveUser(json)))
            .catch(e => {notify.show('请求用户信息遇到错误');console.log(e);})
    }
}
