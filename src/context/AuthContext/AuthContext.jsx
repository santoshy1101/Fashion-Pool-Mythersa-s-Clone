import { createContext, useReducer } from "react";
import { reducer } from "./reducer"

export const AuthContext = createContext();

//Login authentication with loading & error indicators!
const initState = {
    isAuth: false,
    isLoading: false,
    isError: false
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return <AuthContext.Provider value={{ state, dispatch }}>
        {children}
    </AuthContext.Provider>
}