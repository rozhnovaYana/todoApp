import {ADD_TODO, REMOVE_TODO, SAVE_TODO} from "../types"
export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: return {...state, todos:[...state.todos, {
          id:  Date.now().toString(),
          title:action.title
        }]}
        case REMOVE_TODO: return {...state, todos:state.todos.filter(item=>item.id!==id)}
        case SAVE_TODO: return {
            ...state, todos: state.todos.map(item => {
                if (item.id == id) {
                item.title=action.title
            }
        })}
        default: return state

    }
}