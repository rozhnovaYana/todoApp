import { ADD_TODO, REMOVE_TODO, SAVE_TODO } from "../types"
//создаем обьект, который будет хранить в себе case в качестве ключа, а в качестве значения - функцию, которая возвращает новый обект стейта
const handlers = {
    [ADD_TODO]:(state, {title})=>({...state, todos:[...state.todos, {
          id:  Date.now().toString(),
          title
    }]
    }),
    [REMOVE_TODO]: (state, { id }) => ({ ...state, todos: state.todos.filter(item => item.id !== id) }),
    [SAVE_TODO]:(state, {id, title})=>({...state, todos: state.todos.map(item => {
                if (item.id == id) {
                    item.title = title 
                    return item
            }
    })}),
    DEFAULT:state=>state
}

export const todoReducer = (state, action) => {
    //создаем одну шаблонную функцию
    const handler = (handlers[action.type]) || handlers.DEFAULT
    return handler(state, action)
}