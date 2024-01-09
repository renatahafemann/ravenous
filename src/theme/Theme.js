import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    gold: {
      color: "#CAAE0C",
      fontWeight: "bold",
    },
    goldUppercase: {
      color: "#CAAE0C",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: "white",
          fontSize: 16,
          fontWeight: "bold",
          "&.Mui-selected": {
            color: "#CAAE0C",
          },
          textTransform: "none",
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
