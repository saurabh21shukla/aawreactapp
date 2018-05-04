import React, {Component} from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { isEmpty } from '../utill/auth';
import { USER_LOGIN, userLogin } from '../actions/login_action';
class Login extends Component {
	constructor(props){
		super(props);
		this.loginHandler = this.loginHandler.bind(this);
	}
	componentDidMount(){
		//document.body.style.background = "#ccc";
		document.body.style.backgroundColor = "#fafafa";
	}
	loginHandler(e){
		let email = document.getElementById("email").value;
		let password =  document.getElementById("password").value;
		let userData = { email, password }
		isEmpty(userData)===true?this.dispatchAction(userData):null;
		e.preventDefault();
	}

	dispatchAction(userData){
			this.props.dispatch(userLogin(userData, this.props.history));
			for(let key in userData){
				document.getElementById(key).value='';
			}
		}

	render(){
		return(
				<div className ="container">
				<div className="row">
				<div className="col s6 offset-s3 z-depth-1 login-container">
				<h4 className="login-title">AAW User Login</h4>
				<form onSubmit={this.loginHandler}>
					<div className="input-field col s12">
			          <input id="email" type="email" required="" aria-required="true" className="validate" />
			          <label for="email">Email (User Name)</label>
			      </div>
			        <div className="input-field col s12">
			          <input id="password" type="password" required="" aria-required="true" className="validate" />
			          <label for="password">Password</label>
			        </div>
				<div className="row">
			        <div className="input-field col s12">
			          <button type="submit" className="waves-effect waves-light btn login-btn">User Login</button>
			        </div>
				</div>
				</form>
				</div>
				
				</div>
				</div>
		)
	}
}

export default connect()(Login);