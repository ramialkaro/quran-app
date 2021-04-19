
import { createMuiTheme } from '@material-ui/core/styles'

const headerFont = 'Poppins'

const theme = createMuiTheme({
    direction: "rtl",
    palette: {
        primary: {
            main: '#3D2645',
        },
        secondary: {
            main: '#EDDFEF'
        }
    },
    props: {
        MuiButton: {
            variant: 'contained',
            color: 'secondary',
        },
    },
    typography: {
        fontFamily: 'Open Sans',

        h1: {
            fontFamily: headerFont,
        },
        h2: {
            fontFamily: headerFont,
        },
        h3: {
            fontFamily: headerFont,
        },
        h4: {
            fontFamily: headerFont,
        },
        h5: {
            fontFamily: headerFont,
        },
        h6: {
            fontFamily: headerFont,
        },
        subtitle1: {
            fontFamily: headerFont,
        },
        subtitle2: {
            fontFamily: headerFont,
        },
        body1: {
            fontFamily: headerFont,
        },
        body2: {
            fontFamily: headerFont,
        },
        button: {
            fontFamily: headerFont,
        },
        caption: {
            fontFamily: headerFont,
        },
        overline: {
            fontFamily: headerFont,
        },
        
    },
})

export default theme
