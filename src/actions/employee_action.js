export const ADD_EMPLOYEE = "ADD_EMPLOYEE";

export let addemp= (empData) =>{
	return {
		type : ADD_EMPLOYEE,
		payload : empData
	}
} 
