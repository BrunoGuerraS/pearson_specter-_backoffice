import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const theme =  createTheme({
    palette: {
        primary: {
            main: grey[900]
        },
        secondary: {
            main: red[500]
        },
        error: {
            main: red.A400,
        }

    }
})

export default theme;
