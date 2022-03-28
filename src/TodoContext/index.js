import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoCountext = React.createContext()

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('Todos_V1', [])
    const [state, setState] = React.useState("")
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length
    
    let searchTodos = [];
    if(!state.length >=1){
        searchTodos = todos
    } else {
        searchTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase()
            const searchText = state.toLowerCase()
        
            return todoText.includes(searchText);
        })
    }
    
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        })
        saveTodos(newTodos)
    }
    
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);  
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos)
    }
    
    const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => todo.text !== text)
        saveTodos(newTodos) //metodo mas eficiente podriamos usar el splice pero mejor no. JAJAJAJAJAJAJAJAJAJA
    }
    
    return (
        <TodoCountext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            state,
            setState,
            searchTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoCountext.Provider>
    )
}

export { TodoCountext, TodoProvider }
