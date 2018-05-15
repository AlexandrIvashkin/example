import bd from '../store/bd.js';

const reducers = function(state = bd, action) {
	switch (action.type) {
        case 'EDIT_NAME': 
        	return Object.assign({}, state, {
        		name: action.name
      		})
      	default:
        	return state
    }
}

module.exports = reducers;