import employeeReducer from '../../src/reducer/employeeReducer';
import { ADD_EMPLOYEE } from '../../src/actions/employee_action';

describe("Chech EMPLOYEE Status", () => {
	it("Check employeeReducer", () => {
		const empData = {email:"test@api.com", password : "asdf1234"}
		const empAction = {
			type : ADD_EMPLOYEE,
			payload : empData
		}
		function addNewEmployee(empData, empAction){
			switch(empAction.type){
				case ADD_EMPLOYEE :
					return [...empData, empAction.payload];
				default :
					return empData;
			}
		}
	expect(employeeReducer(empData,empAction )).toEqual(addNewEmployee(empData, empAction));
	})
});
