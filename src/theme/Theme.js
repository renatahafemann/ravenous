import { createTheme} from "@mui/material/styles";

export const theme = createTheme({
    typography: {
      body1: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      }, 
      gold: {
        color: "#CAAE0C",
      }
    },
    palette: {
      gold: {
        main: "#CAAE0C",
        contrastText: "#fff",
      },
    },
  });