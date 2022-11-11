import { addToCartItem, checkoutCart, removeCartItem, totalCartPrice } from "./action"

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return addToCartItem(state, action.payload);
        case "REMOVE_ITEM":
            return removeCartItem(state, action.payload);
        case "TOTAL_PRICE":
            return totalCartPrice(state, action.payload);
        case "CHECKOUT_CART":
            return checkoutCart(state);
        default:
            return state;
    }
} 