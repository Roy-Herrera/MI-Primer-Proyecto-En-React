import React from 'react';
import { TodoCountext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const { state, setState } = React.useContext(TodoCountext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setState(event.target.value)
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Cebolla" 
            value={state}
            onChange={onSearchValueChange}    
        />
    );
}

export { TodoSearch };