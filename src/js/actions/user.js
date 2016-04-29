import {API_SERVER} from './const';
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

export function getUser() {
    return dispatch => {
        dispatch(requestUser())
            // use credentials for send cookie.
        return fetch(API_SERVER + '/user',{credentials:'same-origin'})
            .then(response => response.json())
            .then(json => dispatch(receiveUser(json)))
            .catch(e => notify.show('请求用户信息遇到错误'))
    }
}
