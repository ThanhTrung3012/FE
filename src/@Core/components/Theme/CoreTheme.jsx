

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