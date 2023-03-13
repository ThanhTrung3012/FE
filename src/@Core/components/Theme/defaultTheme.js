import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
    palette:{
        primary: {
            light: '#4b9fea',
            main: '#1e88e5',
            dark: '#155fa0',
            contrastText: '#fff',
          },
        action:{
            light: '#f5f5f5',
            main: '#eeeeee',
            dark: '#bdbdbd',
            contrastText: '#000',
        },
        info:{
            light: '#9e9e9e',
            main: '#757575',
            dark: '#424242',
            contrastText: '#000',
        },
    },
    typography:{
        h5:{
            fontSize:'1.1rem'
        }
    },
    breakpoints:{
        // ....
    }
})

export default defaultTheme