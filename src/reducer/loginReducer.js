import { polyfill } from 'es6-promise';
import 'isomorphic-fetch';
import { USER_LOGIN } from '../actions/login_action';
import { httpReq } from '../utill/serviceApi';

export default (state={}, action) => {
	console.log("=====",action);
	switch(action.type){
		case USER_LOGIN :{
			let URL = '/login';
            let options = {
                method :"POST",
                body : action.payload
            }
            httpReq(URL, options, action.history);
		}
		default :
			return state;
	}
}
