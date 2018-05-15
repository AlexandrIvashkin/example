import Header from './header.js';
import Ma from './ma.js';
import actions from './action/actions.js';

import React from 'react';
import { connect } from 'react-redux';

import { Route, Link } from 'react-router';

class App extends React.Component{
	click(){
		this.props.editName('Petya')
	}

	render(){
		return(		
			<div onClick={this.click.bind(this)}>
			<div>
				{this.props.name}
			</div>
			<div>
				<Link to="me">11</Link>
			</div>
    		</div>
		)
	}
};

function mapStateToProps (state) {
	console.log(state.reducers.name)
  return {
   	name: state.reducers.name
  }
};

export default connect(mapStateToProps, actions)(App);