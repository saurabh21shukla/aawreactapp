export const USER_LOGIN = "USER_LOGIN";

export let userLogin = (userData, history) =>{
	return {
		type : USER_LOGIN,
		payload : userData,
		history : history
	}
} 
