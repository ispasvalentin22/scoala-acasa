import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './root-reducer';
import rootReducer from './root-reducer';

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;