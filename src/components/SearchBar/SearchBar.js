import React, { useState } from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import searchBackground2 from "../../images/searchBackground2.jpg";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { theme } from "../../theme/Theme";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setSortBy(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "40vh",
          backgroundImage: `url(${searchBackground2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginBottom: 4,
        }}
      >
        <Tabs value={sortBy} onChange={handleChange} centered>
          <Tab value="best_match" label="Best Match" />
          <Tab value="rating" label="Highest Rated" />
          <Tab value="review_count" label="Most Reviewed" />
        </Tabs>

        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", marginTop: 2 }}
        >
          <Grid item>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search business"
                value={searchTerm}
                onChange={handleSearchTermChange}
              />
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Where?"
                value={location}
                onChange={handleLocationChange}
              />
            </Paper>
          </Grid>
        </Grid>
        <Button variant="contained" color="gold" sx={{ m: 4 }} onClick={() => alert(sortBy)}>
          Let's Go
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default SearchBar;
