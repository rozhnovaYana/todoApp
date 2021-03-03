import {SCREENS_CHANGE} from "../types"
const handlers = {
    [SCREENS_CHANGE]: (state, { id }) => id,
    DEFAULT:(state)=>state
}
export const screensReducer = (state, action) => {
    const handler=handlers[action.type]||handlers.DEFAULT
    return handler(state, action)
}