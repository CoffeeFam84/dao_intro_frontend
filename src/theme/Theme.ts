import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  breakpoints:{
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
    ],
    values: {
      xs: 0, 
      sm: 500,
      md: 768,
      lg: 1130,
      xl: 1330,
    },
  },
  typography: {
    fontFamily: 'Roboto',
    h2: {
      fontSize: '54px',
      lineHeight: '72px',
      fontWeight: '400',
      color:'white',
    },
    h3:{
      fontSize:'20px',
      fontWeight:'600',
      lineHeight:'30px',
      color:'white'
    },
    h4: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight:'36px',
      color:'white'
    },
    h5: {
      fontSize: '18px',
      fontWeight: 400,
      color:'white',
      // maxWidth:'400px'
    },
    h6: {
      fontSize: '14px',
      fontWeight: 400,
      color:'white',
      maxWidth:'165px',
      textAlign:'center'
    },
    body1: {
      fontSize: 18,
      fontWeight: 400
    },
    body2: {
      fontSize: 14,
      fontWeight: 500
    },
    button: {
      fontSize: 18,
      fontWeight: 600
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
      display: 'block'
    },
    subtitle1: {
      fontSize: 20,
      lineHeight: '28px',
      fontWeight: 300
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 500
    },

    overline: {
      fontSize: 12,
      fontWeight: 300
    }
  },
  palette: {
    primary: {
      main: '#2BA55D',
      light:'#204A73',
      dark:'#1B3C5C'
      
    },
    secondary: {
      main: '#26D6BB',
      contrastText:'white'
    },
  }
})