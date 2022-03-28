import React from 'react';
import './CreateTodoButton.css';


function CreateTodoButton(props) {
    const onclickButton = (msg) => {
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button 
            className="CreateTodoButton"
            onClick={onclickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };