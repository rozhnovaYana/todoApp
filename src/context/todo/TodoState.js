import React, {useReducer} from "react"
import {TodoContext} from "./todoContext"
import { todoReducer } from "./TodoReducer"
import {ADD_TODO, REMOVE_TODO, SAVE_TODO} from "../types"

export const TodoState = ({ children }) => {
    const initialization = {
        todos: [
            { id: "1", title: "Learn React" }
        ]
    }
    const [state, dispatch] = useReducer(todoReducer, initialization)
    const addTodo = title => dispatch({
        type: ADD_TODO,
        title
    })
    const removeTodo = id => dispatch({
        type: REMOVE_TODO,
        id
    })
    const saveTodo = (id, title) => dispatch({
        type: SAVE_TODO,
        id, title
    })

    return <TodoContext.Provider value={{todos:state.todos, addTodo, saveTodo, removeTodo}}>{children}</TodoContext.Provider>
}