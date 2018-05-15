import Ma1 from './ma1.js';
import Ma2 from './ma2.js';

import React from 'react';

import { Switch, Route } from 'react-router-dom'

class Ma extends React.Component{
	render(){
		return(		
			<Switch>
		      <Route exact path='/' component={Ma1}/>
		      <Route path='/ma2' component={Ma2}/>
    		</Switch>
		)
	}
};

export default Ma;