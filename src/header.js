import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component{
	render(){
		return(		
	      <div>
	        <h1>Header</h1>
	        <ul>
	        	<li><Link to='/'>Home</Link></li>
	        	<li><Link to='/ma2'>Genre</Link></li>
	        </ul>
	        {this.props.children}
	      </div>
		)
	}
};

export default Header;