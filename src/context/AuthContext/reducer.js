import { loading, loginSuccess } from "./action"
import { error } from "./action"

export const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return loginSuccess(state)
        case "LOADING":
            return loading(state, action.payload)
        case "ERROR":
            return error(state)
        default:
            return state;
    }
}