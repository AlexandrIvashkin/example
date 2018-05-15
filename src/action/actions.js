import redux from 'redux';

const editName = function( name){
	return {
		type: 'EDIT_NAME',
		name
	}
};

module.exports = {editName};