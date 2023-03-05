import {
    RECEIVE_PRODUCTS,
    ADD_TO_CART,
    REMOVE_STOCK,
    RECEIVE_CART,
    UPDATE_PRICE,
    GET_ITEMS_IN_CART,
    RETURN_ITEM,
    PUT_BACK,
    CHECKOUT
  } from "./actions";
import { combineReducers } from "redux";
  
export function productsReducer(state = [], action) {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            console.log("==Got items");
            return action.products;

        case REMOVE_STOCK:
        return state.map(item =>
            item.id === action.id
            ? {
                ...item,
                inStock: parseInt(
                    parseInt(item.inStock) - parseInt(action.amount)
                )
                }
            : item
        );

        case PUT_BACK:
            console.log("==Putting items back");
            return state.map(item =>
                item.id === action.id
                ? {
                    ...item,
                    inStock: parseInt(
                        parseInt(item.inStock) + parseInt(action.amount)
                    )
                    }
                : item
            );

        default:
            return state;
    }
}

export function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("==Adding: ", action.id, "==Amount: ", action.amount);
            return state.map(item =>
                item.id === action.id
                ? {
                    ...item,
                    inCart: parseInt(parseInt(item.inCart) + parseInt(action.amount))
                    }
                : item
            );

        case GET_ITEMS_IN_CART:
            return state.map(item =>
                item.id === action.id
                ? {
                    ...item,
                    inCart: parseInt(parseInt(item.inCart) + parseInt(action.amount))
                    }
                : item
            );

        case UPDATE_PRICE:
            console.log("==Updating price");
            return state.map(item => {
                const totalPrice = item.inCart * item.price;
                return item.id === action.id
                ? {
                    ...item,
                    totalPrice: totalPrice.toFixed(2)
                    }
                : item;
            });

        case RECEIVE_CART:
            console.log("==Got items in cart");
            return action.products.map(product => ({
                ...product,
                inCart: 0,
                totalPrice: 0
            }));

        case RETURN_ITEM:
            console.log("==Returning: ", action.id, "==Amount: ", action.amount);
            return state.map(item => {
                return item.id === action.id
                ? {
                    ...item,
                    inCart: 0
                    }
                : item;
            });

        case CHECKOUT:
            console.log("==Checking out")
            return state.map(product => ({
                ...product,
                inCart: 0
            }));

            default:
            return state;
    }
}

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export default rootReducer;