

import { CART_LOCALSTORE_KEY } from './store/constants';
import reducer, { initState } from './store/reducer';
import React, { createContext, useContext, useEffect, useReducer } from 'react';

const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        localStorage.setItem(CART_LOCALSTORE_KEY, JSON.stringify(state.cart));
    }, [state.cart]);

    return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
