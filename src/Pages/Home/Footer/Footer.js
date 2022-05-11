import React from 'react';
import Grid from '@mui/material/Grid';
import bg from '../../../images/footer.png';
import {Button, Container,TextField,Typography} from '@mui/material';

const bannerBg={
    background:`url(${bg})`, 
    padding:'10px'  
}
 
const Footer = () => {
    return (
         <Container style={bannerBg} sx={{flexGrow:1}}>
             <Grid container spacing={2}>
                 <Grid item  xs={12} md={3}>
                         <h3 style={{color:'cyan'}}>Dentist Portal</h3>
                 <Typography>Emergency Dental Care</Typography>
                     <Typography>Check Up</Typography>
                     <Typography>Treatment Of personal Diseases</Typography>
                     <Typography>Teeth Extraction</Typography>
                 </Grid>
                 <Grid item  xs={12} md={3}>
                         <h3 style={{color:'cyan'}}>Services</h3>
                     <Typography>Emergency Dental Care</Typography>
                     <Typography>Check Up</Typography>
                     <Typography>Treatment Of personal Diseases</Typography>
                     <Typography>Teeth Extraction</Typography>
                 </Grid>
                 <Grid item xs={12} md={3}>
                 <h3 style={{color:'cyan'}}>Oral Heath</h3>
                     <Typography>Emergency Dental Care</Typography>
                     <Typography>Check Up</Typography>
                     <Typography>Treatment Of personal Diseases</Typography>
                     <Typography>Teeth Extraction</Typography>
                 </Grid>
                 <Grid item xs={12} md={3}>
                      <h3 style={{color:'cyan'}}>Our Adress</h3>
                      <Typography>Los Angels, New York 12000</Typography>
                      <Typography>Call Now</Typography>
                      <Button>(+023)34333</Button>
                      <Typography>Sign Up Newsletter</Typography>
                       <TextField placeholder='News letter...'></TextField>
                       <br/>
                       <Button style={{marginTop:'2px'}} variant="contained">Send us</Button>
                 </Grid>
             </Grid>
         </Container>
    );
};

export default Footer;