// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import demoReducer from "./demoReducer"
 export default combineReducers({
 	demo : demoReducer
 });