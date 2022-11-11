import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { cartItems: [], totalPrice: 0 });

    return <CartContext.Provider value={{
        cartItems: state.cartItems,
        totalPrice: state.totalPrice,
        dispatch
    }}>
        {children}
    </CartContext.Provider>
} 