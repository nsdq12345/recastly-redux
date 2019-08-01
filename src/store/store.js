import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, {videoList: exampleVideoData, currentVideo: exampleVideoData[1]}, composeEnhancers(applyMiddleware(thunk)));

var store = createStore(rootReducer, {videoList: exampleVideoData, currentVideo: exampleVideoData[1]}, applyMiddleware(thunk));

export default store;
