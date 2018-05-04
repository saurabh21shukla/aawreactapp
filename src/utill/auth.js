import React from 'react';

export function isEmpty(empData){
	for( let emp in empData ){
		if(!empData[emp]){
			document.getElementById(emp).focus();
			return false;
		}	
	}
	return true;
}

export function checkLoggedIn(){
  let status = sessionStorage.getItem('status');
  let token = sessionStorage.getItem('token');
  if(!status && !token){
    return false;
  }
  else{
    return true
  }
}
