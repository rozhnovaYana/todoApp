import React, {useReducer, useContext} from "react"
import {TodoContext} from "./todoContext"
import { todoReducer } from "./TodoReducer"
import { ADD_TODO, REMOVE_TODO, SAVE_TODO } from "../types"
import {ScreensContext} from "../screens/screensContext"


export const TodoState = ({ children }) => {
    const {changeScreen}=useContext(ScreensContext)
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
    const removeTodo = id => {
        changeScreen(null)
        dispatch({
            type: REMOVE_TODO,
            id
        })
    }
    const saveTodo = (id, title) => dispatch({
        type: SAVE_TODO,
        id, title
    })

    return <TodoContext.Provider value={{todos:state.todos, addTodo, saveTodo, removeTodo}}>{children}</TodoContext.Provider>
}