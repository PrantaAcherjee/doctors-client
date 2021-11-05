import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
const services=[
    {
        name:'Fluoride treatment',
        description:'loreum loreum loreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreum',
        img:fluoride
    },
    {
        name:'Cavity filling',
        description:'loreum loreum loreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreum',
        img:cavity
    },
    {
        name:'Teeth whitening',
        description:'loreum loreum loreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreumloreum',
        img:whitening
    }
]
 
  
const Services = () => {
    return (
        <Container>
            <Typography sx={{fontWeight:500,color:'success.main',m:2}} variant="h6" component="div">
             OUR SERVICES
            </Typography>
            <Typography sx={{fontWeight:600,m:4}} variant="h4" component="div">
             SERVICE WE PROVIDE
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
             services.map(service=><Service
             key={service.name}
             service={service}
             ></Service>)
         }
      </Grid>
    </Box>
        </Container>
    );
};

export default Services;