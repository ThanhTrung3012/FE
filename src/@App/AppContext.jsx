/*
 * Created Date: 08-02-2023, 14:30 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) Đỗ Thành Trung
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

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
