import React, {useReducer, useContext} from "react"
import {TodoContext} from "./todoContext"
import { todoReducer } from "./TodoReducer"
import { ADD_TODO, REMOVE_TODO, SAVE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, HIDE_ERROR, FETCH_TODOS } from "../types"
import { ScreensContext } from "../screens/screensContext"
import { Alert } from 'react-native'
import {Http} from "../../http"



export const TodoState = ({ children }) => {
    const initialization = {
        todos: [],
        loader: true,
        error:null
    }
    const {changeScreen}=useContext(ScreensContext)
    const [state, dispatch] = useReducer(todoReducer, initialization)
    const addTodo = async title => {
         const data = await Http.post("https://todo-app-e0e75-default-rtdb.firebaseio.com/todos.json", {title})
        dispatch({
            type: ADD_TODO,
            title,
            id:data.name
        })
    }
    const removeTodo = id => {
         const activeItem=state.todos.find(item => item.id ==id)
            Alert.alert(
            "Delete",
            `Do you want to delete "${activeItem.title}"?`,
            [
                {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "Delete",
                onPress: async () => {
                    changeScreen(null)
                    //сразу перекидываем на главную страницу
                    await Http.delete(`https://todo-app-e0e75-default-rtdb.firebaseio.com/todos/${id}.json`)
                        dispatch({
                        type: REMOVE_TODO,
                        id
                    })
                    
                }
            }
            ],
            {cancelable:false}
            
            )
        
       
    }
    const saveTodo = async (id, title) => {
        hideError()
        try {
            await Http.patch(`https://todo-app-e0e75-default-rtdb.firebaseio.com/todos/${id}.json`, {title})
            dispatch({
                type: SAVE_TODO,
                id, title
            })
        } catch (e) {
            showError('Что-пошло не так...')
            console.log(e)
        }
        
    }

    const fetchTodos = async () => {
        showLoader()
        hideError()
        try {
            const data = await Http.get("https://todo-app-e0e75-default-rtdb.firebaseio.com/todos.json")
            if (data) {
                const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
                dispatch({ type: FETCH_TODOS, todos })
            } else {
                return
            }
        } catch (e) {
            showError('Что-пошло не так...')
            console.log(e)
        } finally {
            hideLoader()
        }   
    }
    const showLoader = () => dispatch({ type: SHOW_LOADER })
    const hideLoader = () => dispatch({ type: HIDE_LOADER })
    const showError = (error) => dispatch({ type: SHOW_ERROR, error })
    const hideError = () => dispatch({ type: HIDE_ERROR })

    return <TodoContext.Provider value={{todos:state.todos, addTodo, saveTodo, removeTodo, fetchTodos, loading:state.loader, error:state.error}}>{children}</TodoContext.Provider>
}