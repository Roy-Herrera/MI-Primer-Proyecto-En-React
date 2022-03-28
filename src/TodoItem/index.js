import React from 'react';
import './TodoItem.css';
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BsFillPersonDashFill } from "react-icons/bs";

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}    
            >
                <BsFillPersonCheckFill />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}    
            >
                <BsFillPersonDashFill />
            </span>
        </li>
    );
}

export { TodoItem };  

