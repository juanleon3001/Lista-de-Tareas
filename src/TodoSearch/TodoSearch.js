import React from 'react';
import './TodoSearch.css';

function TodoSearch({ state, setState }) {
	return (
		<input
			placeholder="Cortar cebolla"
			className="TodoSearch"
			value={state}
			onChange={(event) => {
				setState(event.target.value);
			}}
		></input>
	);
}

export { TodoSearch };
