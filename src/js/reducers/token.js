import {
    REQUEST_TOKEN,
    RECEIVE_TOKEN
} from '../actions/token';

export function token(state = {
    valid: false,
    isFetching: false,
    access_token: '',
    uid: ''
}, action) {
    switch (action.type) {
        case REQUEST_TOKEN:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_TOKEN:
            if (action.token.access_token == undefined) {
                return Object.assign({}, state, {
                    valid: false,
                    isFetching: false
                });
            } else {
                return Object.assign({}, state, {
                    valid: true,
                    isFetching: false,
                    access_token: action.token.access_token,
                    uid: action.token.uid
                })
            }
        default:
            return state;
    }
}
