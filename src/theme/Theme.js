import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    body1: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    gold: {
      color: "#CAAE0C",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: "white",
          fontWeight: "bold",
          '&.Mui-selected': {
            color: '#CAAE0C',
          }
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#CAAE0C",
        },
        }, 
        
      },
  },
  palette: {
    gold: {
      main: "#CAAE0C",
      contrastText: "#fff",
    },
  },
});
