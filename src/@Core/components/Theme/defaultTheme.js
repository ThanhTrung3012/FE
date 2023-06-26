

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
            contrastText: '#fff',
        },
        orange:{
            main:'#EF6837 !important'
        }
    },
    typography:{
        h1: {
            fontWeight:'bold',
            fontSize:'25px'
        },
        h2:{
            fontWeight:'bold',
            fontSize:'22px'
        },
        h5:{
            fontSize:'1.1rem'
        },
        subtitle1: {
            fontWeight:'500',
            fontSize:'15px',
            color:'#fff',
        }
    },
})

export default defaultTheme