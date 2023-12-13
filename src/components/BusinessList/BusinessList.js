import React, { useState } from "react";
import Business from "../Business/Business";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function BusinessList() {
  const [data, setData] = useState([]);
  

  const businesses = [0, 1, 2, 3, 4, 5];

  return (
    <div className="BusinessList">
      <Container>
        <Grid
          container
          spacing={4}
          sx={{ justifyContent: "center" }}
          columns={{ xs: 1, sm: 2, md: 3 }}
        >
          {businesses.map((business) => {
            return (
              <Grid item m={3}>
                <Business business={business} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
