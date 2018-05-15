import React from 'react';
import ReactDOM  from 'react-dom';
import Ma1 from './ma1.js';

import App from './app.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { Provider } from 'react-redux'
import { createStore, combineReducers  } from 'redux'
import reducers from './reducer/reducer.js';

let store = createStore(
	combineReducers({
    reducers,
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
	      <Route path="/" component={App} />
	      	<Route path="me" component={Ma1} >
	      </Route>
    	</Router>
	</Provider>,
	document.getElementById('root')
);