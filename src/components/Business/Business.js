import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const defaultBusiness = {
imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
name: 'MarginOtto Pizzeria',
address: '1010 Paddington Way',
city: 'Flavortown',
state: 'NY',
zipCode: '10101',
category: 'Italian',
rating: 4.5,
reviewCount: 90
}

export default function Business() {
  return (
    <Box sx={{width: 280}}>
      <img 
        src={defaultBusiness.imageSrc}
        alt='restaurant info'
        width={280}
        height={280}
      />
      <Typography variant='h6' sx={{fontWeight: 'bold'}}>
        {defaultBusiness.name}
      </Typography>
      <Grid container sx={{justifyContent: 'space-between'}}>
        <Grid item xs={8}>
          <Typography variant="body2">
            {defaultBusiness.address}
            <br />
            {defaultBusiness.city}
            <br />
            {defaultBusiness.state} {defaultBusiness.zipCode}
          </Typography>
        </Grid>
        <Grid item sx={{textAlign: 'right'}}>
          <Typography variant="body2">
            <span className='gold uppercase'>{defaultBusiness.category}</span>
            <br />
            <span className='gold'>4.5 stars</span>
            <br />
            90 reviews
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

