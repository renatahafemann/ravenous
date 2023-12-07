import React from 'react';
import Box from '@mui/system/Box';
import TextField from '@mui/material/TextField';
import searchBackground from '../../images/searchBackground.jpeg';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';

const SearchBar = () => {
  return (
    <Box 
        display = "flex"
        justifyContent= "center"
        alignItems= "center"
        sx={{
            height: "40vh",
            backgroundImage: `url(${searchBackground})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            marginBottom: 4,
            }}
    >
        <Stack direction="column" sx={{width:"60%"}}>
        <Stack direction="row" spacing={2} >
            <Typography>Test</Typography>
            <Typography>Test</Typography>
            <Typography>Test</Typography>
        </Stack>
        <Stack direction="row" spacing={2} >
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "50vh" }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search business"
                />
            </Paper>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "50vh" }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Where?"
                />
            </Paper>
            
            </Stack>
            
        </Stack>
        
        
    </Box>
      
   
  );
};

export default SearchBar;
