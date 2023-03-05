/*
 * Created Date: 08-02-2023, 14:30 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) ...
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */


import React, { createContext, useContext } from 'react';

const WebPageContext = createContext();

export const useWebPageContext = () => useContext(WebPageContext);

const WebPageProvider = props => {
    return <WebPageContext.Provider value={props}>{props.children}</WebPageContext.Provider>;
};

export default WebPageProvider;
