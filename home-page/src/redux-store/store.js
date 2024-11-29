import {legacy_createStore, applyMiddleware} from 'redux';
import logger from "redux-logger";
import MyReducer from '../reducers/MyReducer';
let mystore= legacy_createStore(MyReducer, applyMiddleware(logger));
export default mystore;