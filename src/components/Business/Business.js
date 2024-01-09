import React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme/Theme";

export default function Business({business}) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: 280 }}>
        <img
          src={business.image_url}
          alt="restaurant info"
          width={280}
          height={280}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {business.name}
        </Typography>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid item xs={6}>
            <Typography variant="body2">
              {business.location.address1}
              <br />
              {business.location.city}
              <br />
              {business.location.state} {business.location.zip_code}
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Typography variant="goldUppercase">
              {business.categories[0].title}
            </Typography>
            <br />
            <Typography variant="gold">{business.rating} stars</Typography>
            <br />
            <Typography variant="body2">{business.review_count} reviews</Typography>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
