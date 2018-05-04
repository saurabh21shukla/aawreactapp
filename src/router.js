import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import List from './components/List';
import AddEmployee from './components/AddEmployee';
import { checkLoggedIn } from './utill/auth'
export const AppRouter = (props) => {
	return(
             <Router>
       		<Switch>
       			<Route exact path = "/" render={(routeProps) => (checkLoggedIn(routeProps) ? ( <Redirect to="/addemployee" {...props} /> ) : ( <Login {...props} {...routeProps} /> ))} />
       			<Route exact path = "/employeelist" render={(routeProps) => (checkLoggedIn(routeProps) ? ( <List {...props} {...routeProps} /> ) : ( <Redirect to="/" {...props} /> ))} />
       			<Route exact path = "/addemployee" render={(routeProps) => (checkLoggedIn(routeProps) ? ( <AddEmployee {...props} {...routeProps} /> ) : ( <Redirect to="/" {...props} /> ))} />
       		</Switch>

   		 </Router>
	)
}