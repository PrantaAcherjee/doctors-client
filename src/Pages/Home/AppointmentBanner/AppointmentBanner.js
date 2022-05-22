import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';
 
const appoinmentBanner={
    background:`url(${bg})`,
    marginTop:175,
    backgroundColor:'rgba(45,58,74,0.8',
    backgroundBlendMode:'darken,luminosity'
}
const AppointmentBanner = () => {
    return (
         <Box style={appoinmentBanner} sx={{flexGrow:1}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img
                style={{width:400,marginTop:-110}}
                src={doctor} alt="" />
            </Grid>
            <Grid item xs={12} md={6} sx={{
                display:'flex',
                justifyContent:"flex-start",
                alignItems:'center',
                textAlign:'left'}}>
            <Box>
            <Typography variant="h6" sx={{mb:5}} style={{color:'#5CE7ED',margin:'0 0.5rem'}}>
                Appointment
            </Typography>            
            <Typography variant="h4" sx={{my:5}} style={{color:'white',margin:'0 0.5rem'}}>
              Make an  appointment Today
            </Typography>
            <Typography variant="h4" style={{color:'white',fontSize:14,fontWeight:300,margin:'0 0.5rem'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit tempore, saepe iure mollitia temporibus quibusdam. Rem debitis nostrum ab alias.
            </Typography>
            <Button variant="contained" style={{backgroundColor:"#5CE7ED",margin:'1.5rem 0.5rem'}}>Learn More</Button>
            </Box>
            </Grid>
        </Grid>
         </Box>
    );
};

export default AppointmentBanner;