import { createTheme } from '@mui/material/styles'
import { createBreakpoints } from '@mui/system'
const Breakpoints = createBreakpoints({})

declare module '@mui/material/styles' {
  // declare colors for Palette
  interface PaletteOptions {
    neutral: React.CSSProperties['color']
  }

  // declare variant to Typography
  interface TypographyVariantsOptions {
    banner?: React.CSSProperties
  }

  // declare properties to Theme
  interface ThemeOptions {
    fontSize?: any
    fontWeight?: any
    fontFamily?: any
  }
  interface Theme {
    fontSize?: any
  }
}

// declare custome variant to Typography
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    banner: true
  }
}

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#fff12'
    },
    neutral: 'red'
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },

  typography: {
    htmlFontSize: 10,
    fontFamily: ['Montserrat', 'sans-serif'].join(','),

    h1: {
      [Breakpoints.down('md')]: {
        fontSize: '12px'
      },
      fontSize: '18px'
    },

    banner: {
      [Breakpoints.down('md')]: {
        fontSize: '10px'
      },
      fontSize: '24px'
    }
  },

  // Custom theme props
  fontSize: {
    small: '12px'
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  },
  fontFamily: {
    primary: ['Montserrat', 'sans-serif'].join(','),
    banner: ['Roboto', 'sans-serif'].join(',')
  }
})

export default defaultTheme
