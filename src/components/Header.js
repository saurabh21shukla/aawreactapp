import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { companyName, routeLinks } from '../config';

const Header = () => {	
		return(
			<div>
				 <nav className="light-blue lighten-1" role="navigation">
				    <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">{companyName}</a>
				      <ul className="right hide-on-med-and-down">
				        {routeLinks.map((elm, ind)=>navLink(elm, ind))}
				      </ul>

				      <ul id="nav-mobile" className="sidenav">
				        {routeLinks.map((elm, ind)=>navLink(elm, ind))}
				      </ul>
				      <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
				    </div>
				  </nav>
			</div>
		)
}

const navLink = function(elm, id){
		return (
			<li key={id}>
				<NavLink exact activeClassName="isactive" to={elm.url}>{elm.name}</NavLink>
			</li>
		)
}

export default Header;