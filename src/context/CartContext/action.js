export const addToCartItem = (state, payload) => {
    return { ...state, cartItems: [...state.cartItems, payload] }
}

export const removeCartItem = (state, payload) => {
    return {
        ...state, cartItems: state.cartItems.filter(item =>
            item.id !== payload)
    }
}

export const totalCartPrice = (state, payload) => {
    return { ...state, totalPrice: Math.floor(state.totalPrice + payload) }
}

export const checkoutCart = (state) => {
    return { ...state, cartItems: [] }
}