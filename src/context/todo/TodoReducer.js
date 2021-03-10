import { ADD_TODO, FETCH_TODOS, HIDE_LOADER, REMOVE_TODO, SAVE_TODO, SHOW_ERROR, SHOW_LOADER, HIDE_ERROR } from "../types"
//создаем обьект, который будет хранить в себе case в качестве ключа, а в качестве значения - функцию, которая возвращает новый обект стейта
const handlers = {
    [ADD_TODO]:(state, {title, id})=>({...state, todos:[...state.todos, {
          id:  Date.now().toString(),
          title, id
    }]
    }),
    [REMOVE_TODO]: (state, { id }) => ({ ...state, todos: state.todos.filter(item => item.id !== id) }),
    [SAVE_TODO]:(state, {id, title})=>({...state, todos: state.todos.map(item => {
                if (item.id == id) {
                    item.title = title 
                    return item
            }
    })
    }),
    [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
    [SHOW_LOADER]: (state) => ({ ...state, loader: true }),
    [HIDE_LOADER]: (state) => ({ ...state, loader: false }),
    [SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
    [HIDE_ERROR]:(state)=>({...state, error:null}),
    
    DEFAULT:state=>state
}

export const todoReducer = (state, action) => {
    //создаем одну шаблонную функцию
    const handler = (handlers[action.type]) || handlers.DEFAULT
    return handler(state, action)
}