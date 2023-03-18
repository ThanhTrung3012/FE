/*
 * Created Date: 03-02-2023, 21:00 pm
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

import React from 'react'
import defaultTheme from './defaultTheme';
import { ThemeProvider } from '@mui/material/styles';

const CoreThemeProvider = (props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
        {props.children}
    </ThemeProvider>
  )
}

export default CoreThemeProvider