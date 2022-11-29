import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import greetingReducer from './reducers';

const rootReducer = combineReducers({ greetings: greetingReducer });
const appStore = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(thunk),
);

export default appStore;
