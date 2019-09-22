import { createMuiTheme } from '@material-ui/core/styles';

export const themeOptions = {
    palette: {
        primary: {
            main: '#7E1C24',
            light: '#A71C24',
            contrastText: '#fff',
        },
        secondary: {
            main: '#590000',
            contrastText: '#fff',
        },
    },
    typography: {
        fontSize: 13,
        fontFamily: '"Lato",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    },
};

const theme = createMuiTheme(themeOptions);

export default theme;
