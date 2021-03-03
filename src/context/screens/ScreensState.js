import React, {useReducer} from 'react'
import { ScreensContext } from "./screensContext"
import { screensReducer } from "./screensReducer"
import {SCREENS_CHANGE} from "../types"
export const ScreensState = ({ children }) => {
    const [state, dispatch] = useReducer(screensReducer, null)
    const changeScreen = id => dispatch({
        type: SCREENS_CHANGE,
        id
    })
    return (
        <ScreensContext.Provider value={{todoId:state, changeScreen}}>{children}</ScreensContext.Provider>
    )
}
