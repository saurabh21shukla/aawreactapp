import React, {Component} from 'react';
import Header from './Header';
import { addemp } from '../actions/employee_action';

import { empAddList } from '../config';

import { isEmpty } from '../utill/auth';

class AddEmployee extends Component {
	constructor(props){
		super(props);
		this.addEmployeeHandler = this.addEmployeeHandler.bind(this);
		this.dispatchAction = this.dispatchAction.bind(this);
	}
	addEmployeeHandler(e){
		let empData = {
			username : document.getElementById('username').value,
			fname : document.getElementById('fname').value,
			lname : document.getElementById('lname').value,
			email : document.getElementById('email').value,
			date : document.getElementById('date').value
		}
		isEmpty(empData)===true?this.dispatchAction(empData):null;
		e.preventDefault();
	}

	dispatchAction(empData){
			this.props.dispatch(addemp(empData))
			for(let key in empData){
				document.getElementById(key).value='';
			}
		}

	render(){
		return(
			<div>
				<Header />
				<div className ="container">
				<div className="row">
					
					<div className="col s8 offset-s2">
						<h4>Add Employee List</h4>
						<div className="input-field col s12">
				          <input id="username" type="text" required="" aria-required="true" className="validate"  />
				          <label for="username">{empAddList.username}</label>
				        </div>
				        <div className="input-field col s12">
				          <input id="fname" type="text" required="" aria-required="true" className="validate" />
				          <label for="fname">{empAddList.fname}</label>
				        </div>
				        <div className="input-field col s12">
				          <input id="lname" type="text" required="" aria-required="true" className="validate" />
				          <label for="lname">{empAddList.lname}</label>
				        </div>
				        <div className="input-field col s12">
				          <input id="email" type="email" required="" aria-required="true" className="validate"/>
				          <label for="email">{empAddList.email}</label>
				        </div>
				        <div className="input-field col s12">
				          <input id="date" type="date" required="" aria-required="true" className="validate" />
				          <label for="date">{empAddList.date}</label>
				        </div>
				        <div className="input-field col s12">
				          <button type="button" className="waves-effect waves-light btn login-btn" onClick={this.addEmployeeHandler}>Add Employee</button>
				        </div>
					</div>
				</div>
				</div>
				</div>
		)
	}
}

export default AddEmployee;