import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './reducers/reducer';

const loggerMiddleware = createLogger();

// user middleware
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer,initialState);
}
