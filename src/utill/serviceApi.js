import { polyfill } from 'es6-promise';
import 'isomorphic-fetch';
import { checkHttpStatus, parseJSON} from './utill'; 
import {SERVER_URL} from '../config';

export function serviceApi(URL, options){
    return fetch(`${SERVER_URL}${URL}`, options);
}

export function httpReq(URL, options, history){
// http://www.mockapi.io/
    serviceApi(URL, options)
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(function(response) {
        console.log(response);
        sessionStorage.setItem("token",response.token);
        sessionStorage.setItem("status",response.status);
        history.push('/addemployee');
        return {token:response.token, status:response.status};
    })
    .catch((error) => {
                if (error && typeof error.response !== 'undefined' && error.response.status >= 400 && error.response.status < 500) {
                    return error.response.json().then((data) => {
                    	 return  {"errdata" : data}
                    });
                } else if (error && typeof error.response !== 'undefined' && error.response.status >= 500) {
                  	return error.response.json().then((data) => {
                      return {"errdata" : data};
                    });
                    return {errStatus:500, errMsg : 'A server error occurred while sending your data!'};
                } 
                else {
                 return {status : 'Connection Error', errMsg: 'An error occurred while sending your data!'};
                }
              return {status : 'Connection Error', errMsg: 'An error occurred while sending your data!'};
            });
}
 
