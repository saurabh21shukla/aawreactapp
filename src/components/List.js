import React, {Component} from 'react';
import Header from './Header';
import { empAddList, empTitle } from '../config';


class List extends Component {
	constructor(props){
		super(props)
		this.state = {employee : this.props.employee}
	}
	render(){
		let empList = (data, id) =>{
			return (
					<tr key={id}>
									<td>{data.username}</td>
									<td>{data.fname}</td>
									<td>{data.lname}</td>
									<td>{data.email}</td>
									<td>{data.date}</td>
					</tr>
				)
		}
		return(
			<div>
				<Header />
				<div className ="container">
				<div className="row">
					<div className="col s12">
						<h4>{empTitle}</h4>
						<table className="highlight">
							<thead>
								<tr>
									<th>{empAddList.username}</th>
									<th>{empAddList.fname}</th>
									<th>{empAddList.lname}</th>
									<th>{empAddList.email}</th>
									<th>{empAddList.date}</th>
								</tr>
							</thead>
							<tbody>
								{this.state.employee.length>0?this.state.employee.reverse().map((elm, id)=>empList(elm, id)):''}
							</tbody>
						</table>
					</div>
				</div>
				</div>
			</div>
		)
	}
}
export default List;