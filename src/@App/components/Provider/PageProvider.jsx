/*
 * Created Date: 08-02-2023, 14:30 pm
 * Author: Nghiêm Mạnh Cường
 * Email: nghiemmanhcuong98@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) Đỗ Thành trung
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */

import React, { createContext, useContext } from 'react';

const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

const PageProvider = props => {
    return <PageContext.Provider value={props}>{props.children}</PageContext.Provider>;
};

export default PageProvider;
