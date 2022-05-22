import { Container, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor  from "../../../images/doctor.png";

const OurDoctor = () => {
  return (
    <div>
     <Container style={{marginBottom:'3rem'}}>
        <Typography style={{color:'cyan',fontSize:'24px'}}>
                Our Doctors
        </Typography>
        <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={12} md={4}>
            <img style={{height:'100%',width:'100%'}} src={doctor} alt=""/>
        </Grid>
        <Grid xs={12} md={4}>
        <img style={{height:'100%',width:'100%'}} src={doctor} alt=""/>
        </Grid>
        <Grid xs={12} md={4}>
        <img style={{height:'100%',width:'100%'}} src={doctor} alt=""/>
        </Grid>
      </Grid>
    </Box>
     </Container>
    </div>
  )
}

export default OurDoctor