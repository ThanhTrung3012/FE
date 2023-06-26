

import { getSession } from '@Core/Helper/Session';
import {
    ADD_CART,
    REMOVE_CART,
    CART_LOCALSTORE_KEY,
    CHANGE_QUANTITY,
    CLEAR_CART,
    TOGGLE_MENU,
    CLOSE_MENU
} from './constants';

const productsInCart = getSession(CART_LOCALSTORE_KEY, 'local')?.products ?? [];

const initState = {
    cart: {
        total: productsInCart.length,
        products: productsInCart
    },
    menuActive: false
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_CART: {
            return {
                ...state,
                cart: {
                    total: state.cart.products.length + 1,
                    products: [...state.cart.products, payload]
                }
            };
        }

        case REMOVE_CART: {
            const newProducts = state.cart.products.filter(p => p.id !== payload);
            return {
                ...state,
                cart: {
                    total: newProducts.length,
                    products: newProducts
                }
            };
        }

        case CHANGE_QUANTITY: {
            const newProducts = state.cart.products.map(p => {
                if (p.id === payload.id) {
                    if (payload.type === 'plus') {
                        return { ...p, quantity: p.quantity + 1 };
                    }

                    if (payload.type === 'minus' && p.quantity > 1) {
                        return { ...p, quantity: p.quantity - 1 };
                    }
                }
                return p;
            });

            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: newProducts
                }
            };
        }

        case CLEAR_CART: {
            return {
                ...state,
                cart: {
                    total: 0,
                    products: []
                }
            };
        }

        case TOGGLE_MENU: {
            return {
                ...state,
                menuActive: !state.menuActive
            };
        }

        case CLOSE_MENU: {
            return {
                ...state,
                menuActive: false
            };
        }

        default:
            return state;
    }
};

export { initState };
export default reducer;
