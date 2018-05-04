import { ADD_EMPLOYEE } from '../actions/employee_action';

export default (state=[], action) => {
	console.log(state);
	switch(action.type){
		case ADD_EMPLOYEE :
			return [...state, action.payload];
		default :
			return state;
	}
}