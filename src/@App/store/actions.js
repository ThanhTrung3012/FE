
import { ADD_CART, REMOVE_CART, CHANGE_QUANTITY, CHANGE_COLOR, CLEAR_CART, TOGGLE_MENU, CLOSE_MENU } from './constants';

export const addToCart = payload => {
    return {
        type: ADD_CART,
        payload
    };
};

export const removeFromCart = payload => {
    return {
        type: REMOVE_CART,
        payload
    };
};

export const changeQuantity = payload => {
    return {
        type: CHANGE_QUANTITY,
        payload
    };
};

export const changeColor = payload => {
    return {
        type: CHANGE_COLOR,
        payload
    };
};

export const clearCart = () => {
    return {
        type: CLEAR_CART,
        payload: null
    };
};

export const toggleMenu = () => {
    return {
        type: TOGGLE_MENU,
        payload: null
    };
}

export const closeMenu = () => {
    return {
        type: CLOSE_MENU,
        payload: null
    };
}