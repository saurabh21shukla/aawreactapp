import { USER_LOGIN, userLogin} from '../../src/actions/login_action'

describe("Chech action User Login", () => {
	it("Check userLogin action", () => {
		const userData = {username : "test@api.com", password:"asdf1234"}
		const newLoginUser = {
			type : USER_LOGIN,
			payload : userData
		}
	expect(userLogin(userData)).toEqual(newLoginUser);
	})
});