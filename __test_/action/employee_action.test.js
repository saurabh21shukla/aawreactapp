import { ADD_EMPLOYEE, addemp} from '../../src/actions/employee_action'

describe("Chech action employee", () => {
	it("Check addemp action", () => {
		const empData = {username : "Mark", email:"test@api.com", fname : "Saurabh"}
		const addNewEmployee = {
			type : ADD_EMPLOYEE,
			payload : empData
		}
	expect(addemp(empData)).toEqual(addNewEmployee);
	})
});