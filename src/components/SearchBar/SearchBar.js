import React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import searchBackground2 from "../../images/searchBackground2.jpg";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { theme } from "../../theme/Theme";

const SearchBar = () => {
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
      <Grid
        container     
        sx={{ justifyContent: "space-around", width: "40vw" }}
      >
          <Grid item >
            <Typography >Best<br />Match</Typography>
          </Grid>
          <Grid item >
            <Typography>Highest<br />Rated</Typography>
          </Grid>
          <Grid item >
            <Typography>Most<br />Reviewed</Typography>
          </Grid>
        <Grid item xs={12} md={10}>
          <hr />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center", marginTop: 2 }}
      >
        <Grid item >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search business" />
          </Paper>
        </Grid>
        <Grid item>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center", 
              width: 400                  
            }}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where?" />
          </Paper>
        </Grid>
      </Grid>
      <Button variant="contained" color="gold" sx={{m: 4}}>Let's Go</Button>
    </Box>
    </ThemeProvider>
  );
};

export default SearchBar;
