import React, { useState } from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme/Theme";

function App() {
  const [data, setData] = useState([]);

  const setDataFromSearch = (data) => {
    setData(data);
  };

  return data.businesses ? (
    <div>
      <SearchBar setDataFromSearch={setDataFromSearch} />
      <BusinessList data={data} />
    </div>
  ) : (
    <ThemeProvider theme={theme}>
      <div>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "20vh",
            marginBottom: 4,
          }}
        >
          <Typography variant="goldUppercase" sx={{fontSize: 20}}>
            Find business in your area!
          </Typography>
        </Box>
        <SearchBar setDataFromSearch={setDataFromSearch} />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            height: "20vh",
            marginBottom: 4,
          }}
        >
          <Typography variant="goldUppercase" sx={{fontSize: 20}}>
            Amazing business only one click away! Let's go!
          </Typography>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
