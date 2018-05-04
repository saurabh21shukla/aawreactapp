import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';
import loginReducer from './loginReducer';

let reducers = combineReducers({
	login : loginReducer,
	employee : employeeReducer
	});

export default reducers;